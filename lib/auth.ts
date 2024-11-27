import { hash, compare } from "bcryptjs";
import { connectToDatabase } from "./db";
import { User } from "@/models/user";

export async function createUser(email: string, password: string, name: string) {
    await connectToDatabase();

    const hashedPassword = await hash(password, 12);

    const user = await User.create({
        email,
        password: hashedPassword,
        name,
    });

    return { id: user._id.toString(), email: user.email, name: user.name };
}

export async function verifyCredentials(email: string, password: string) {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) return null;

    const isValid = await compare(password, user.password);
    if (!isValid) return null;

    return { id: user._id.toString(), email: user.email, name: user.name };
}
