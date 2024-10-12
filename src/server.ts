import { app } from "./index.js";
import { connectToMongoDB } from "./mongoDB.js";
import { runActiveTasksCron } from "./services/cron.services.js";

const PORT: number = 4000;

connectToMongoDB();

runActiveTasksCron();

app.listen(PORT, () => {
	console.log(`\nServer is listening on port ${PORT}.\n`);
});
