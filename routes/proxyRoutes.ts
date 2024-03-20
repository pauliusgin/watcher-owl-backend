import { Router } from "express";
import { vintedCatalogController } from "../controllers/vintedCatalogController.js";
import { handleIncomingData } from "../helpers/handleIncomingDataHelper.js";

const proxyRouter = Router();

// POST, /proxy
proxyRouter.post("/", async (request, response) => {
	try {
		const searchQuery = request.body;
		const fullData = (await vintedCatalogController(
			searchQuery
		)) as FullDataType;

		const items = handleIncomingData(fullData);

		response.send(JSON.stringify(items));
	} catch (error) {
		if (error instanceof Error) {
			console.log("Error while receiving the data:", error.message);
			response.status(400).json(`Error: ${error.message}`);
		}
	}
});

export { proxyRouter };
