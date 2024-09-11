import { Router } from "express";
import {
    addUserToDatabase,
    deleteUserFromDatabase,
    updateUser,
} from "../controllers/user.controllers.js";

const users = Router();

users.get("/users", async (_, res) => {
    res.json("Health check for api/users");
});

users.post("/users", async (req, res) => {
    const _user = await addUserToDatabase(req.body);

    res.status(200).send(_user);
});

users.patch("/users/:id/", async (req, res) => {
    await updateUser(req.params.id, req.body.isLoggedIn);

    res.sendStatus(200);
});

users.delete("/users/", async (req, res) => {
    const user = req.body;

    const deletedUser = await deleteUserFromDatabase(user);

    res.sendStatus(200);
});

export { users };
