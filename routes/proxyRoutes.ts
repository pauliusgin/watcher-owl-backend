import { Router } from "express";

import { eshopWatcher } from "../eshopWatcher.js";
import { handleIncomingData } from "../helpers/handleIncomingDataHelper.js";

const proxyRouter = Router();

// POST, /proxy
proxyRouter.post("/", async (request, response) => {
	try {
		const searchQuery = request.body;
		const fullData = (await eshopWatcher(searchQuery)) as FullDataType;

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
