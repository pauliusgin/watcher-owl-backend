import express from "express";
import { corsMiddleware } from "./middleware/corsMiddleware.js";

import { proxyRouter } from "./routes/proxyRoutes.js";

const app = express();

const origin: string[] = ["http://localhost:1337"];

app.use(corsMiddleware(origin));
app.use(express.json());

app.use("/proxy", proxyRouter);

export { app };
