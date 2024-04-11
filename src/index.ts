import express from "express";
import cors from "cors";
// import { corsMiddleware } from "./middleware/corsMiddleware.js";
import { rateLimiterMiddleware } from "./middleware/rateLimiterMiddleware.js";

import { proxyRouter } from "./routes/proxy.routes.js";
import { historyRouter } from "./routes/history.routes.js";
import { loginRouter } from "./routes/login.routes.js";

const app = express();

const allowedOrigins: originType = [
	"https://watcher-owl.vercel.app/",
	"http://localhost:1337",
];

app.use(
	cors({
		origin: allowedOrigins,
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);
// app.use(corsMiddleware(allowedOrigins));

app.options("*", cors());

app.use(express.json());

app.use("/api", rateLimiterMiddleware);

app.use("/api", proxyRouter);
app.use("/api", historyRouter);
app.use("/api", loginRouter);

export { app };
