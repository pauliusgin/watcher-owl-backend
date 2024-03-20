import express from "express";
import { firestore } from "./firebase/firestore.js";
import { corsMiddleware } from "./middleware/corsMiddleware.js";

import { proxyRouter } from "./routes/proxyRoutes.js";
import { itemsRouter } from "./routes/itemRoutes.js";

const app = express();
const allowedOrigins: originType = "http://localhost:1337";

app.use(corsMiddleware(allowedOrigins));
app.use(express.json());

app.use("/proxy", proxyRouter);
app.use("/items", itemsRouter);

// TODO below ===================================== DB

async function getAllItems() {
	const shopItems = firestore.collection("shop-items");
	const items = await shopItems.where("price", "==", 3.99).get();
	if (items.empty) {
		console.log("No matching documents.");
		return;
	}
	items.forEach((item) => {
		console.log(item.data());
	});
}
// getAllItems();

// TODO above ====================================== DB

export { app };
