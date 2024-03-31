import { Router } from "express";
import { historyController } from "../controllers/historyController.js";

const historyRouter = Router();

historyRouter.get("/history", async (_, res) => {
	try {
		const history = await historyController();

		res.status(200).json(history);
	} catch (err) {
		if (err instanceof Error) {
			console.error("Error while receiving history data:", err.message);
			res.status(400).json(`Error: ${err.message}`);
		}
	}
});

export { historyRouter };
