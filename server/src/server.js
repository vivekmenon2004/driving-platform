import "dotenv/config";
import app from "./app.js";
import config from "./config/index.js";

const PORT = config.port;

let server;

// Guard app.listen so Vercel can run the application serverlessly without binding to a local port
if (!process.env.VERCEL) {
  server = app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT} in ${config.env} mode`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use by another process.`);
      console.error(`Either stop that process or specify a different PORT in server/.env.`);
    } else {
      console.error("Server error:", err);
    }
    process.exit(1);
  });

  process.on("SIGTERM", () => {
    if (server) {
      server.close(() => {
        process.exit(0);
      });
    }
  });

  process.on("SIGINT", () => {
    if (server) {
      server.close(() => {
        process.exit(0);
      });
    }
  });
}

export default app;
