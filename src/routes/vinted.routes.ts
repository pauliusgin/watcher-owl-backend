import { Router } from "express";
import { vintedController } from "../controllers/vinted.controller.js";

const vinted = Router();

vinted.post("/vinted", async (req, res) => {
	const searchQuery = req.body;

	try {
		const items = await vintedController(searchQuery);

		res.status(200).send(JSON.stringify(items));
	} catch (error) {
		if (error instanceof Error) {
			console.log("Error while receiving the data:", error.message);
			res.status(400).json(`Error: ${error.message}`);
		}
	}
});

export { vinted };
