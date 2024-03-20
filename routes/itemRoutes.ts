import { Router } from "express";

const itemsRouter = Router();

// GET, /items
itemsRouter.get("/", (req, res) => {
	const items = "These are all the items in the database.";
	return items;
});

export { itemsRouter };
