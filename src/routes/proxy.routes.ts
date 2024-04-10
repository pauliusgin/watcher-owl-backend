import { Router } from "express";
import { vintedCatalogController } from "../controllers/vintedCatalogController.js";
import { handleIncomingData } from "../helpers/handleIncomingDataHelper.js";

const proxyRouter = Router();

proxyRouter.post("/proxy", async (req, res) => {
	try {
		const searchQuery = req.body;
		const fullData = (await vintedCatalogController(
			searchQuery
		)) as vintedFullDataType;

		const items = handleIncomingData(fullData);

		res.status(200).send(JSON.stringify(items));
	} catch (error) {
		if (error instanceof Error) {
			console.log("Error while receiving the data:", error.message);
			res.status(400).json(`Error: ${error.message}`);
		}
	}
});

export { proxyRouter };
