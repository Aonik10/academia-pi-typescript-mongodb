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

        const { email, password, firstName, lastName } = await req.json();

        // check if a user already exists
        const userFound = await User.findOne({ email });

        // if not, create a new user and save it
        if (!userFound) {
            const newUser = await createUser({ email, password, firstName, lastName });
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

interface NewUser {
    email: string;
    password: string | null;
    firstName?: string | null;
    lastName?: string | null;
    image?: string | null;
}

export const createUser = async ({ email, password, image, firstName, lastName }: NewUser) => {
    const newUser = await User.create({
        email: email,
        password: password ? await encryptPassword(password) : null,
        firstName: firstName ?? "Alumno",
        lastName: lastName,
        image: image ?? "https://iili.io/H4uyVZF.webp",
        inscriptions: [],
        reffersCodes: [],
    });
    return newUser;
};
