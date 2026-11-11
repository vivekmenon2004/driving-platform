import crypto from "node:crypto";
import jwksRepository from "../repositories/jwks.repository.js";

export class JwksService {
  constructor() {
    this.keyCache = new Map();
  }

  generateRsaKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });

    const keyObj = crypto.createPublicKey(publicKey);
    const jwk = keyObj.export({ format: "jwk" });
    const kid = `key-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;

    return {
      kid,
      publicKeyPem: publicKey,
      privateKeyPem: privateKey,
      jwk,
    };
  }

  async getActiveSigningKey() {
    let activeKey = await jwksRepository.findActiveKey();
    if (!activeKey) {
      const generated = this.generateRsaKeyPair();
      const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      activeKey = await jwksRepository.createKey({
        kid: generated.kid,
        algorithm: "RS256",
        publicKeyPem: generated.publicKeyPem,
        privateKeyPem: generated.privateKeyPem,
        expiresAt,
      });
      activeKey.private_key_pem = generated.privateKeyPem;
      await jwksRepository.retireOldKeys(activeKey.kid);
    }
    return activeKey;
  }

  async getKeyByKid(kid) {
    if (this.keyCache.has(kid)) {
      return this.keyCache.get(kid);
    }
    const key = await jwksRepository.findByKid(kid);
    if (key) {
      this.keyCache.set(kid, key);
    }
    return key;
  }

  async getJwksJson() {
    await this.getActiveSigningKey();
    const validKeys = await jwksRepository.findValidKeys();

    const keys = validKeys.map((key) => {
      const keyObj = crypto.createPublicKey(key.public_key_pem);
      const jwk = keyObj.export({ format: "jwk" });
      return {
        kty: jwk.kty,
        use: "sig",
        alg: key.algorithm || "RS256",
        kid: key.kid,
        n: jwk.n,
        e: jwk.e,
      };
    });

    return { keys };
  }
}

export default new JwksService();

