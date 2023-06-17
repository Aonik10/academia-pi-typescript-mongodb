import Course from "@/models/courses";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.search.split("=")[1]; //no encontre otra forma de acceder a los params
        await connectToDB();
        const course = await Course.findById(id);
        return NextResponse.json({ course });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred", error });
    }
}
