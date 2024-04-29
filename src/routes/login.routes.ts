import { Router } from "express";

const login = Router();

login.post("/login/google", async (req, res) => {
	// console.log("Atėjo:", req.body);
	res.json("Hello from backend...");
});

export { login };
