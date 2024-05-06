import { Router } from "express";
import { firstCronJob } from "../services/cron.services.js";

const tasks = Router();

tasks.get("/tasks", async (_, res) => {
	res.json("Get all of the tasks.");
});

tasks.get("/tasks/:id", async (_, res) => {
	res.json("Get a specific task.");
});

tasks.post("/tasks", async (req, res) => {
	res.json("Here a new task will be created.");
});

tasks.patch("/tasks/:id", async (req, res) => {
	res.json("Here a specific task will be edited.");
});

tasks.delete("/tasks/:id", async (req, res) => {
	res.json("Here a specific task will be deleted.");
});

export { tasks };
