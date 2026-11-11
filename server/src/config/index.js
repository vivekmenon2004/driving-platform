import "dotenv/config";

const config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT, 10) || 5000,
  clientUrl:
    process.env.CLIENT_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  cookieSecret: process.env.COOKIE_SECRET || "dev_cookie_secret_fallback",
  db: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "swedish_driving_db",
    ssl: process.env.DB_SSL === "true",
  },
  jwt: {
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    refreshExpiresDays: parseInt(process.env.JWT_REFRESH_EXPIRES_DAYS, 10) || 7,
    issuer: process.env.JWT_ISSUER || "swedish-driving-platform",
    audience: process.env.JWT_AUDIENCE || "swedish-driving-client",
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
};

export default config;
