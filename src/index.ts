import express from "express";
import { handleCors } from "./middleware/cors.middleware.js";
import { rateLimiter } from "./middleware/rateLimiter.middleware.js";

import { healthCheck } from "./routes/healthCheck.routes.js";
import { history } from "./routes/history.routes.js";
import { login } from "./routes/login.routes.js";
import { users } from "./routes/users.routes.js";
import { proxy } from "./routes/proxy.routes.js";

const app = express();

app.use(express.json());
app.use(
	handleCors(["https://watcher-owl.vercel.app", "http://localhost:1337"])
);

app.use("/api", rateLimiter);
app.use("/api", healthCheck);
app.use("/api", history);
app.use("/api", login);
app.use("/api", users);
app.use("/api", proxy);

export { app };
