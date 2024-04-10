import { app } from "./index.js";
import { connectToMongoDB } from "./mongoDB.js";

const PORT: number = 4000;

connectToMongoDB();

app.listen(PORT, () => {
	console.log(`\nServer is listening on port ${PORT}.\n`);
});
