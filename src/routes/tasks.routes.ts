import { Router } from "express";
import {
    addTaskToDatabase,
    getUserTasks,
    getTaskById,
    toggleTaskActivity,
    selectNotificationMethod,
    deleteTaskFromDatabase,
} from "../controllers/task.controllers.js";

const tasks = Router();

tasks.post("/tasks", async (req, res) => {
    const task = req.body;

    const addedTask = await addTaskToDatabase(task);

    res.status(201).send(addedTask);
});

tasks.get("/tasks/:id", async (req, res) => {
    const task = await getTaskById(req.params.id);

    res.status(200).send(task);
});

tasks.patch("/tasks/:id/toggle", async (req, res) => {
    const { isActive } = req.body;

    const task = await toggleTaskActivity(req.params.id, isActive);

    res.status(200).send(task);
});

tasks.patch("/tasks/:id/notify", async (req, res) => {
    const { notification } = req.body;

    const task = await selectNotificationMethod(req.params.id, notification);

    res.status(200).send(task);
});

tasks.get("/tasks/users/:id", async (req, res) => {
    const userTasks = await getUserTasks(req.params.id);

    res.status(200).send(userTasks);
});

tasks.delete("/tasks/:id", async (req, res) => {
    await deleteTaskFromDatabase(req.params.id);

    res.sendStatus(200);
});

export { tasks };
