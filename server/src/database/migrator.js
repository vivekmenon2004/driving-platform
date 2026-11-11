import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pool } from "./connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const migrationsDir = path.join(__dirname, "migrations");

const calculateChecksum = (content) => {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i);
    hash |= 0;
  }
  return hash;
};

const ensureFlywayTable = async (client) => {
  await client.query(`
    CREATE TABLE IF NOT EXISTS flyway_schema_history (
      installed_rank INT NOT NULL,
      version VARCHAR(50),
      description VARCHAR(200) NOT NULL,
      type VARCHAR(20) NOT NULL,
      script VARCHAR(1000) NOT NULL,
      checksum INT,
      installed_by VARCHAR(100) NOT NULL,
      installed_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      execution_time INT NOT NULL,
      success BOOLEAN NOT NULL,
      CONSTRAINT flyway_schema_history_pk PRIMARY KEY (installed_rank)
    );
    CREATE INDEX IF NOT EXISTS flyway_schema_history_s_idx ON flyway_schema_history (success);
  `);
};

export const runMigrations = async () => {
  const client = await pool.connect();
  try {
    await ensureFlywayTable(client);

    const { rows: appliedRows } = await client.query(
      `SELECT version, checksum, success FROM flyway_schema_history WHERE version IS NOT NULL`
    );
    const appliedMap = new Map(appliedRows.map((r) => [r.version, r]));

    const { rows: rankRows } = await client.query(
      `SELECT COALESCE(MAX(installed_rank), 0) AS max_rank FROM flyway_schema_history`
    );
    let nextRank = parseInt(rankRows[0].max_rank, 10) + 1;

    const files = fs.readdirSync(migrationsDir)
      .filter((f) => f.startsWith("V") && f.endsWith(".sql"))
      .sort((a, b) => {
        const vA = parseInt(a.slice(1).split("__")[0], 10);
        const vB = parseInt(b.slice(1).split("__")[0], 10);
        return vA - vB;
      });

    for (const file of files) {
      const match = file.match(/^V(\d+)__(.+)\.sql$/);
      if (!match) continue;

      const version = match[1];
      const description = match[2].replace(/_/g, " ");
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf-8");
      const checksum = calculateChecksum(sql);

      if (appliedMap.has(version)) {
        const applied = appliedMap.get(version);
        if (!applied.success) {
          throw new Error(`Migration ${file} previously failed`);
        }
        continue;
      }

      console.log(`Applying Flyway migration: ${file}`);
      const startTime = Date.now();

      await client.query("BEGIN");
      try {
        await client.query(sql);
        const executionTime = Date.now() - startTime;

        await client.query(
          `INSERT INTO flyway_schema_history 
            (installed_rank, version, description, type, script, checksum, installed_by, execution_time, success)
           VALUES ($1, $2, $3, 'SQL', $4, $5, 'postgres', $6, TRUE)`,
          [nextRank, version, description, file, checksum, executionTime]
        );

        await client.query("COMMIT");
        console.log(`Successfully applied ${file} in ${executionTime}ms`);
        nextRank++;
      } catch (err) {
        await client.query("ROLLBACK");
        console.error(`Failed to apply migration ${file}:`, err);
        throw err;
      }
    }
  } finally {
    client.release();
  }
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runMigrations()
    .then(() => {
      console.log("All migrations executed successfully");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Migration error:", err);
      process.exit(1);
    });
}

