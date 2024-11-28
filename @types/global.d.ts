import mongoose from "mongoose";

declare global {
    interface Global {
        mongoose: {
            conn: mongoose.Connection | null;
            promise: Promise<mongoose.Connection> | null;
        };
    }
}
