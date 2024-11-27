import { NextResponse } from "next/server";
import { createUser } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const { email, password, name } = await request.json();
        const user = await createUser(email, password, name);
        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
