import { pool } from "../../../database/connection.js";

export class JwksRepository {
  async findActiveKey() {
    const query = `
      SELECT id, kid, algorithm, public_key_pem, private_key_pem, status, expires_at, created_at
      FROM jwks_keys
      WHERE status = 'ACTIVE' AND expires_at > CURRENT_TIMESTAMP
      ORDER BY created_at DESC
      LIMIT 1
    `;
    const { rows } = await pool.query(query);
    return rows[0] || null;
  }

  async findByKid(kid) {
    const query = `
      SELECT id, kid, algorithm, public_key_pem, private_key_pem, status, expires_at, created_at
      FROM jwks_keys
      WHERE kid = $1
      LIMIT 1
    `;
    const { rows } = await pool.query(query, [kid]);
    return rows[0] || null;
  }

  async findValidKeys() {
    const query = `
      SELECT kid, algorithm, public_key_pem, status, expires_at
      FROM jwks_keys
      WHERE (status = 'ACTIVE' OR status = 'RETIRED') AND expires_at > CURRENT_TIMESTAMP
      ORDER BY created_at DESC
    `;
    const { rows } = await pool.query(query);
    return rows;
  }

  async createKey({ kid, algorithm, publicKeyPem, privateKeyPem, expiresAt }) {
    const query = `
      INSERT INTO jwks_keys (kid, algorithm, public_key_pem, private_key_pem, status, expires_at)
      VALUES ($1, $2, $3, $4, 'ACTIVE', $5)
      RETURNING id, kid, algorithm, public_key_pem, status, expires_at, created_at
    `;
    const { rows } = await pool.query(query, [kid, algorithm, publicKeyPem, privateKeyPem, expiresAt]);
    return rows[0];
  }

  async retireOldKeys(activeKid) {
    const query = `
      UPDATE jwks_keys
      SET status = 'RETIRED'
      WHERE kid != $1 AND status = 'ACTIVE'
    `;
    await pool.query(query, [activeKid]);
  }
}

export default new JwksRepository();

