import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["workout", "meal", "challenge"],
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
