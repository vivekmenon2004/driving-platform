import pg from "pg";
import config from "../config/index.js";

const { Pool } = pg;

const poolConfig = config.db.connectionString
  ? {
      connectionString: config.db.connectionString,
      ssl: config.db.ssl ? { rejectUnauthorized: false } : false,
    }
  : {
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      ssl: config.db.ssl ? { rejectUnauthorized: false } : false,
    };

export const pool = new Pool(poolConfig);

export const query = (text, params) => pool.query(text, params);

export default {
  pool,
  query,
};

