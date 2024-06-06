import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String },
	timestamp: { type: Number, required: true },
	tasks: [
		{
			title: { type: String, required: true },
			search: { type: [String], required: true },
			timestamp: { type: Number, required: true },
			isActive: { type: Boolean, required: true },
			isFavorite: { type: Boolean, required: true },
			notification: { type: String, required: true },
			retrieved_items: [
				{
					id: { type: Number, required: true },
					title: { type: String, required: true },
					photo_thumbnail: { type: String, required: true },
					photo_full_size: { type: String, required: true },
					timestamp: { type: Number, required: true },
					price: { type: Number, required: true },
					currency: { type: String, required: true },
					status: { type: String, required: true },
					url: { type: String, required: true },
				},
			],
		},
	],
});

userSchema.index({ email: 1, "tasks.title": 1 }, { unique: true });

const User = mongoose.model("User", userSchema, "users");

export { User };
