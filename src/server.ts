import app from "./app.js";
import prisma from "./lib/prisma.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();

    console.log("Database connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`AS Builders server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();