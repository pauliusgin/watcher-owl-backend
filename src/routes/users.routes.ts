import jwt from "jsonwebtoken";
import "dotenv/config";
import { Router } from "express";
import {
    addUserToDatabase,
    deleteUserFromDatabase,
    updateUser,
    findUserById,
} from "../controllers/user.controllers.js";
import { authenticateUser } from "../helpers/authenticateUser.helper.js";

const users = Router();

users.get("/users", async (_, res) => {
    res.json("Health check for api/users");
});

users.get("/users/:id", authenticateUser, async (req, res) => {
    const user = await findUserById(req.params.id);

    return res.status(200).send(user);
});

users.post("/users", async (req, res) => {
    const _user = await addUserToDatabase(req.body);

    const token = jwt.sign({ userKey: _user?._id }, process.env.JWT_KEY!, {
        expiresIn: "7d",
    });

    res.status(200).send({ _user, token });
});

users.patch("/users/:id/", authenticateUser, async (req, res) => {
    await updateUser(req.params.id, req.body.isLoggedIn);

    res.sendStatus(200);
});

users.delete("/users/", authenticateUser, async (req, res) => {
    const user = req.body;

    const deletedUser = await deleteUserFromDatabase(user);

    res.sendStatus(200);
});

export { users };
