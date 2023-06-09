import Course from "@/models/courses";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectToDB();
        const courses = await Course.find();
        return NextResponse.json({ courses });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred" });
    }
}
