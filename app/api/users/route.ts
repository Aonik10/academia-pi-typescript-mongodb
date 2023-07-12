import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash } from "bcrypt-ts";
import { UserUpdate } from "@/utils/interfaces";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred" });
    }
}

export async function POST(req: NextRequest) {
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

export async function PUT(req: NextRequest) {
    try {
        connectToDB();
        const body = (await req.json()) as UserUpdate;
        const id = req.nextUrl.searchParams.get("id");

        // find user
        const userFound = await User.findByIdAndUpdate(id, body, { new: true });
        if (!userFound) return NextResponse.json({ message: "User not found" }, { status: 404 });
        return NextResponse.json(
            {
                message: "User updated successfully",
                user: userFound,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                message: "An error ocurred",
                error: error.message,
            },
            { status: 500 }
        );
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
