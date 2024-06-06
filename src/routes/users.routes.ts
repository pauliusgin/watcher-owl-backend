import { Router } from "express";
import {
	addUserToDatabase,
	deleteUserFromDatabase,
} from "../controllers/user.controllers.js";

const users = Router();

users.get("/users", async (_, res) => {
	res.json("Health check for api/users");
});

users.post("/users", async (req, res) => {
	const { email, password } = req.body;

	const user = {
		email,
		password,
		timestamp: Date.now(),
		tasks: [],
	};

	const addedUser = await addUserToDatabase(user);

	if (addedUser) res.json(addedUser);
});

users.patch("/users/:user", async (req, res) => {
	const changesToUser = req.body;
	res.json(`Received request for update: ${changesToUser}`);
});

users.delete("/users/", async (req, res) => {
	const user = req.body;

	const deletedUser = await deleteUserFromDatabase(user);

	if (deletedUser) res.json(deletedUser);
});

export { users };
