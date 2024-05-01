import { Router } from "express";
import {
	checkIfUserIsInTheDatabase,
	addUserToTheDatabase,
} from "../controllers/users.controller.js";

const users = Router();

users.get("/users", async (_, res) => {
	res.json("Health check for api/users");
});

users.post("/users", async (req, res) => {
	const userInfo = {
		email: req.body.email,
		timestamp: Date.now(),
	};

	if (!checkIfUserIsInTheDatabase(userInfo)) {
		addUserToTheDatabase(userInfo);
		res.json(
			`User added with email: ${userInfo.email} and date: ${new Date(
				userInfo.timestamp
			)}`
		);
	} else {
		res.json(`User ${userInfo.email} already exists since `);
	}
});

export { users };
