import { NextRequest, NextResponse } from "next/server";

import Course from "@/database/models/course";
import { connectToDB } from "@/database/database";
import { CourseCreate } from "@/utils/interfaces";

export async function GET(req: NextRequest) {
    try {
        await connectToDB();
        const courses = await Course.find();
        return NextResponse.json({ courses });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred" });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectToDB();
        const body = (await req.json()) as CourseCreate;
        const newCourse = await Course.create(body);
        return NextResponse.json({ message: "Course created", course: newCourse }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred", error: error }, { status: 400 });
    }
}
