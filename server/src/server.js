import "dotenv/config";
import app from "./app.js";
import config from "./config/index.js";

const PORT = config.port;

const server = app.listen(PORT, () => {
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
  server.close(() => {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    process.exit(0);
  });
});
