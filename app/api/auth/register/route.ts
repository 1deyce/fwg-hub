import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from "@/lib/auth";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, password, name } = await req.body;
        const user = await createUser(email, password, name);
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}
