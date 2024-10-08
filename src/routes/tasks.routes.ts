import { Router } from "express";
import {
    addTaskToDatabase,
    getUserTasks,
    getTaskById,
    toggleTaskActivity,
    selectNotificationMethod,
    deleteTaskFromDatabase,
} from "../controllers/task.controllers.js";
import { authenticateUser } from "../helpers/authenticateUser.helper.js";

const tasks = Router();

tasks.post("/tasks", authenticateUser, async (req, res) => {
    const task = req.body;

    const addedTask = await addTaskToDatabase(task);

    res.status(201).send(addedTask);
});

tasks.get("/tasks/:id", authenticateUser, async (req, res) => {
    const task = await getTaskById(req.params.id);

    res.status(200).send(task);
});

tasks.patch("/tasks/:id/toggle", authenticateUser, async (req, res) => {
    const { isActive } = req.body;

    const task = await toggleTaskActivity(req.params.id, isActive);

    res.status(200).send(task);
});

tasks.patch("/tasks/:id/notify", authenticateUser, async (req, res) => {
    const { notification } = req.body;

    const task = await selectNotificationMethod(req.params.id, notification);

    res.status(200).send(task);
});

tasks.get("/tasks/users/:id", authenticateUser, async (req, res) => {
    const userTasks = await getUserTasks(req.params.id);

    res.status(200).send(userTasks);
});

tasks.delete("/tasks/:id", authenticateUser, async (req, res) => {
    await deleteTaskFromDatabase(req.params.id);

    res.sendStatus(200);
});

export { tasks };
