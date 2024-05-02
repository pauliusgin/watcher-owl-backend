import { Router } from "express";
import { handleUserInTheDatabase } from "../controllers/users.controller.js";

const users = Router();

users.get("/users", async (_, res) => {
	res.json("Health check for api/users");
});

users.post("/users", async (req, res) => {
	const userInfo = {
		email: req.body.email,
		timestamp: Date.now(),
	};

	const handledUser = handleUserInTheDatabase(userInfo);
	// res.json(
	// 	`User added with email: ${userInfo.email} and date: ${new Date(
	// 		userInfo.timestamp
	// 	)}`
	// );
	res.json(`api/users POST response:", ${handledUser}`);
});

users.patch("/users/:user", (req, res) => {
	const userUpdate = req.body;
	res.json(`Received request for update: ${req.body}`);
});

users.delete("/users/:user", (req, res) => {
	const userToDelete = req.body;
	res.json(`Received request to delete this user: ${req.body}`);
});

export { users };
