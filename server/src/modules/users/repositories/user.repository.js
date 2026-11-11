import { pool } from "../../../database/connection.js";

export class UserRepository {
  async findByEmail(email) {
    const query = `
      SELECT u.id, u.email, u.password_hash, u.first_name, u.last_name, u.phone_number,
             u.status, u.failed_login_attempts, u.locked_until, u.email_verified,
             u.preferred_language, u.metadata, u.created_at, u.updated_at,
             COALESCE(ARRAY_AGG(ur.role_id) FILTER (WHERE ur.role_id IS NOT NULL), '{}') AS roles
      FROM users u
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      WHERE LOWER(u.email) = LOWER($1) AND u.deleted_at IS NULL
      GROUP BY u.id
      LIMIT 1
    `;
    const { rows } = await pool.query(query, [email]);
    return rows[0] || null;
  }

  async findById(id) {
    const query = `
      SELECT u.id, u.email, u.first_name, u.last_name, u.phone_number,
             u.status, u.failed_login_attempts, u.locked_until, u.email_verified,
             u.preferred_language, u.metadata, u.created_at, u.updated_at,
             COALESCE(ARRAY_AGG(ur.role_id) FILTER (WHERE ur.role_id IS NOT NULL), '{}') AS roles
      FROM users u
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      WHERE u.id = $1 AND u.deleted_at IS NULL
      GROUP BY u.id
      LIMIT 1
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  }

  async createUser({
    email,
    passwordHash,
    firstName,
    lastName,
    phoneNumber,
    preferredLanguage = "sv",
  }) {
    const query = `
      INSERT INTO users (
        email,
        password_hash,
        first_name,
        last_name,
        phone_number,
        preferred_language
      )
      VALUES (LOWER($1), $2, $3, $4, $5, $6)
      RETURNING id, email, first_name, last_name, phone_number, status, preferred_language, created_at
    `;
    const values = [email, passwordHash, firstName, lastName, phoneNumber, preferredLanguage];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async assignRole(userId, roleId) {
    const query = `
      INSERT INTO user_roles (user_id, role_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, role_id) DO NOTHING
    `;
    await pool.query(query, [userId, roleId]);
  }

  async incrementFailedAttempts(id) {
    const query = `
      UPDATE users
      SET failed_login_attempts = failed_login_attempts + 1,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING failed_login_attempts
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0]?.failed_login_attempts || 0;
  }

  async lockAccount(id, minutes = 15) {
    const query = `
      UPDATE users
      SET locked_until = CURRENT_TIMESTAMP + ($2 || ' minutes')::INTERVAL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
    `;
    await pool.query(query, [id, minutes]);
  }

  async resetFailedAttempts(id) {
    const query = `
      UPDATE users
      SET failed_login_attempts = 0,
          locked_until = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
    `;
    await pool.query(query, [id]);
  }

  async updateProfile(id, { firstName, lastName, phoneNumber, preferredLanguage }) {
    const query = `
      UPDATE users
      SET first_name = COALESCE($2, first_name),
          last_name = COALESCE($3, last_name),
          phone_number = COALESCE($4, phone_number),
          preferred_language = COALESCE($5, preferred_language),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1 AND deleted_at IS NULL
      RETURNING id, email, first_name, last_name, phone_number, preferred_language, updated_at
    `;
    const { rows } = await pool.query(query, [id, firstName, lastName, phoneNumber, preferredLanguage]);
    return rows[0] || null;
  }
}

export default new UserRepository();

