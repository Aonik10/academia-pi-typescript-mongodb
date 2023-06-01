import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { genSalt, hash } from "bcrypt-ts";

export async function GET(req: Request) {
    try {
        await connectToDB();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred" });
    }
}

export async function POST(req: Request) {
    try {
        await connectToDB();

        const body = await req.json();

        // check if a user already exists
        const userFound = await User.findOne({ email: body.email });

        // if not, create a new user and save it
        if (!userFound) {
            const newUser = await User.create({
                email: body.email,
                password: await encryptPassword(body.password),
                image: body.image ?? "no-image",
            });
            return NextResponse.json({ message: "User created", user: newUser }, { status: 200 });
        }

        return NextResponse.json({ message: "User already exists in db", user: userFound }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error ocurred", error: error }, { status: 400 });
    }
}

const encryptPassword = async (password: string): Promise<string> => {
    const salt = await genSalt();
    return await hash(password, salt);
};
