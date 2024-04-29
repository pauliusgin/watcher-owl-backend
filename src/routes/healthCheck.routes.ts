import { Router } from "express";

const healthCheck = Router();

healthCheck.get("/", (_, res) => {
	res.send("Server is online.");
});

export { healthCheck };
