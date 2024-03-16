import { eshopWatcher } from "./eshopWatcher.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const corsOptions = {
	origin: "http://localhost:1337",
	optionsSuccessStatus: 200,
};
// app.get("/proxy", (_, res) => {
// 	res.send("this is indeed a proxy port");
// });

app.post("/proxy", cors(corsOptions), async (request, response) => {
	const searchQuery = request.body;
	const fullData = (await eshopWatcher(searchQuery)) as FullDataType;
	const items = fullData.items
		.map((item: TypeItem) => ({
			id: item.id,
			title: item.title,
			photo: item.photo.thumbnails[0].url,
			price: item.price,
			currency: item.currency,
			status: item.status,
			url: item.url,
		}))
		.slice(0, 50);

	response.send(JSON.stringify(items));
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log("====== Server is listening on port", PORT, "=======");
});
