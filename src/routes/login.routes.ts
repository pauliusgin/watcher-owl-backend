import { Router } from "express";

const login = Router();

login.post("/login/google", async (req, res) => {
	res.json("Hello from backend...");
});

export { login };
