import mongoose from "mongoose";

const retrievedItemSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    taskTitle: { type: String, required: true },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    photo_thumbnail: { type: String, required: true },
    photo_full_size: { type: String, required: true },
    timestamp: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    url: { type: String, required: true },
});

export { retrievedItemSchema };
