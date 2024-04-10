import express from "express";
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import { rateLimiterMiddleware } from "./middleware/rateLimiterMiddleware.js";

import { proxyRouter } from "./routes/proxy.routes.js";
import { historyRouter } from "./routes/history.routes.js";
import { loginRouter } from "./routes/login.routes.js";

const app = express();
const allowedOrigins: originType = "https://watcher-owl.vercel.app/";

app.use(corsMiddleware(allowedOrigins));
app.use("/api", rateLimiterMiddleware);

app.use(express.json());

app.use("/api", proxyRouter);
app.use("/api", historyRouter);
app.use("/api", loginRouter);

export { app };
