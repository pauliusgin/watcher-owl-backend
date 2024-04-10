import mongoose from "mongoose";
import "dotenv/config";

export async function connectToMongoDB() {
	const uri: string = process.env.MONGO_DB_URI!;

	try {
		await mongoose.connect(uri);
		console.log("Successfully connected to the database...\n");
	} catch (err) {
		if (err instanceof Error) {
			console.log(`Unable to connect to the database: ${err.message}\n`);
		}
	}
}
