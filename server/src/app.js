import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import config from "./config/index.js";
import { pool } from "./database/connection.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

import authRoutes from "./modules/auth/index.js";
import usersRoutes from "./modules/users/index.js";
import schoolsRoutes from "./modules/schools/index.js";
import learningContentRoutes from "./modules/learning-content/index.js";
import trafficSignsRoutes from "./modules/traffic-signs/index.js";
import questionsRoutes from "./modules/questions/index.js";
import practiceRoutes from "./modules/practice/index.js";
import mockExamsRoutes from "./modules/mock-exams/index.js";
import subscriptionsRoutes from "./modules/subscriptions/index.js";
import paymentsRoutes from "./modules/payments/index.js";
import referralsRoutes from "./modules/referrals/index.js";
import commissionsRoutes from "./modules/commissions/index.js";
import notificationsRoutes from "./modules/notifications/index.js";
import adminRoutes from "./modules/admin/index.js";
import auditRoutes from "./modules/audit/index.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(cookieParser(config.cookieSecret));
app.use(express.json());
app.use(morgan(config.env === "development" ? "dev" : "combined"));

const getHealthStatus = async (req, res) => {
  let dbStatus = "connected";
  try {
    await pool.query("SELECT 1");
  } catch (err) {
    dbStatus = "disconnected";
  }

  res.status(dbStatus === "connected" ? 200 : 503).json({
    status: dbStatus === "connected" ? "UP" : "DOWN",
    environment: config.env,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    services: {
      api: "UP",
      database: dbStatus === "connected" ? "UP" : "DOWN",
    },
  });
};

app.get("/health", getHealthStatus);
app.get("/api/v1/health", getHealthStatus);

app.use("/.well-known", authRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/schools", schoolsRoutes);
app.use("/api/v1/learning-content", learningContentRoutes);
app.use("/api/v1/traffic-signs", trafficSignsRoutes);
app.use("/api/v1/questions", questionsRoutes);
app.use("/api/v1/practice", practiceRoutes);
app.use("/api/v1/mock-exams", mockExamsRoutes);
app.use("/api/v1/subscriptions", subscriptionsRoutes);
app.use("/api/v1/payments", paymentsRoutes);
app.use("/api/v1/referrals", referralsRoutes);
app.use("/api/v1/commissions", commissionsRoutes);
app.use("/api/v1/notifications", notificationsRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/audit", auditRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
