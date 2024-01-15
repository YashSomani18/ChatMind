import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
//Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Set CORS headers
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map