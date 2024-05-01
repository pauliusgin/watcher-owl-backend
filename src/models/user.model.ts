import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	timestamp: { type: Number, required: true },
	password: { type: String, required: false },
});

const User = mongoose.model("User", userSchema, "users");

export { User };
