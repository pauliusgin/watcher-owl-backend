import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    createdAt: { type: Number, required: true },
    given_name: { type: String },
    picture: { type: String },
});

const UserModel = mongoose.model("User", userSchema, "users");

export { UserModel };
