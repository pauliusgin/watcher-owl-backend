import express from "express";
import { handleCors } from "./middleware/cors.middleware.js";
import { generalRateLimiter } from "./middleware/rateLimiter.middleware.js";
import { healthCheck } from "./routes/healthCheck.routes.js";
import { login } from "./routes/login.routes.js";
import { users } from "./routes/users.routes.js";
import { tasks } from "./routes/tasks.routes.js";
import { vinted } from "./routes/vinted.routes.js";

const app = express();

app.set('trust proxy', 1);

app.use(express.json());
app.use(
	handleCors(["https://peleda.vercel.app", "http://localhost:1337"])
);

app.use("/api", generalRateLimiter);
app.use("/api", healthCheck);
app.use("/api/v1", login);
app.use("/api/v1", users);
app.use("/api/v1", tasks);
app.use("/api/v1", vinted);

export { app };
