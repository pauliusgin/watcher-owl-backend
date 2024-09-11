import mongoose from "mongoose";

const retrievedItemSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    photo: { type: String, required: true },
    full_size_url: { type: String, required: true },
    timestamp: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    url: { type: String, required: true },
});

const taskSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    search: { type: String, required: true, unique: true },
    isActive: { type: Boolean, required: true },
    notification: { type: String, required: true },
    items: [retrievedItemSchema],
});

const TaskModel = mongoose.model("Task", taskSchema, "tasks");

export { TaskModel };
