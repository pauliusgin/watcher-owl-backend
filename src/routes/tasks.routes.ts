import { Router } from "express";
import {
    addTaskToDatabase,
    getUserTasks,
    getTaskById,
    toggleTaskActivity,
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

tasks.patch("/tasks/:id", async (req, res) => {
    const { isActive } = req.body;

    const task = await toggleTaskActivity(req.params.id, isActive);

    res.status(200).send(task);
});

tasks.get("/tasks/users/:id", async (req, res) => {
    const userTasks = await getUserTasks(req.params.id);

    res.status(200).send(userTasks);
});

tasks.post("/tasks/:id", async (req, res) => {
    // TODO query to mongoDB to get user.tasks:id
    // TODO run retrieved task object (searchQuery in keys)
    // TODO in a cronJob function (searchQuery in args)
    // TODO which will run vinted.controller with (searchQuery)
    // TODO "start" for task.start() and "stop" for task.stop()

    res.json("Here a specific task will be started or stopped.");
});

tasks.patch("/tasks/:id", async (req, res) => {
    // TODO query to mongoDB to change user.tasks
    // TODO with $set
    res.json("Here a specific task will be edited.");
});

tasks.delete("/tasks/:id", async (req, res) => {
    // TODO query to mongoDB to delete items from user.tasks[]
    // TODO with $pull
    res.json("Here a specific task will be deleted.");
});

export { tasks };
