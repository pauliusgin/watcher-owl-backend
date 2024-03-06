import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { eshopWatcher } from "./eshopWatcher.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

const corsOptions = {
	origin: "http://localhost:1337",
	optionsSuccessStatus: 200,
};

app.get("/proxy", (req, res) => {
	res.send("this is a indeed proxy port");
});

app.post("/proxy", cors(corsOptions), async (request, response) => {
	const searchQuery = request.body;
	const result = await eshopWatcher(searchQuery);

	response.send(JSON.stringify(result));
});

app.listen(PORT, () => {
	console.log("====== Server is listening on port", PORT, "=======");
});
