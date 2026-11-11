import { pool } from "../../../database/connection.js";

export class SessionRepository {
  async createSession({
    userId,
    refreshTokenHash,
    familyId,
    ipAddress,
    userAgent,
    deviceFingerprint,
    expiresAt,
  }) {
    const query = `
      INSERT INTO user_sessions (
        user_id,
        refresh_token_hash,
        family_id,
        ip_address,
        user_agent,
        device_fingerprint,
        expires_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, user_id, family_id, expires_at, created_at
    `;
    const values = [
      userId,
      refreshTokenHash,
      familyId,
      ipAddress,
      userAgent,
      deviceFingerprint,
      expiresAt,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async findSessionByTokenHash(refreshTokenHash) {
    const query = `
      SELECT id, user_id, refresh_token_hash, family_id, ip_address, user_agent,
             device_fingerprint, is_revoked, expires_at, revoked_at, revoked_reason, created_at
      FROM user_sessions
      WHERE refresh_token_hash = $1
      LIMIT 1
    `;
    const { rows } = await pool.query(query, [refreshTokenHash]);
    return rows[0] || null;
  }

  async revokeSession(id, reason = "LOGOUT") {
    const query = `
      UPDATE user_sessions
      SET is_revoked = TRUE,
          revoked_at = CURRENT_TIMESTAMP,
          revoked_reason = $2,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING id, is_revoked
    `;
    const { rows } = await pool.query(query, [id, reason]);
    return rows[0] || null;
  }

  async revokeFamily(familyId, reason = "REUSE_DETECTED") {
    const query = `
      UPDATE user_sessions
      SET is_revoked = TRUE,
          revoked_at = CURRENT_TIMESTAMP,
          revoked_reason = $2,
          updated_at = CURRENT_TIMESTAMP
      WHERE family_id = $1 AND is_revoked = FALSE
      RETURNING id
    `;
    const { rows } = await pool.query(query, [familyId, reason]);
    return rows;
  }

  async revokeAllUserSessions(userId, reason = "LOGOUT_ALL") {
    const query = `
      UPDATE user_sessions
      SET is_revoked = TRUE,
          revoked_at = CURRENT_TIMESTAMP,
          revoked_reason = $2,
          updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $1 AND is_revoked = FALSE
      RETURNING id
    `;
    const { rows } = await pool.query(query, [userId, reason]);
    return rows;
  }
}

export default new SessionRepository();

