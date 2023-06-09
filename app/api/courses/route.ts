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

export async function POST(req: Request, res: Response) {
    try {
        await connectToDB();
        const body = await req.json();

        if (body.onSale > 1) {
            return NextResponse.json({ message: "onSale number must be in a range between 0 and 1" }, { status: 400 });
        }

        const newCourse = await createCourse(body);
        return NextResponse.json({ message: "Course created", course: newCourse }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error ocurred", error: error }, { status: 400 });
    }
}

interface NewCourse {
    title: string;
    description: string;
    livePrice: number;
    image: string;
    onDemandPrice?: number;
    onSale?: number;
    isLive?: boolean;
    isOnDemand?: boolean;
    isActive?: boolean;
    duration?: string | null;
}

const createCourse = async (body: NewCourse): Promise<NewCourse> => {
    const newCourse = await Course.create({
        title: body.title,
        description: body.description,
        livePrice: body.livePrice,
        image: body.image,
        onDemandPrice: body.onDemandPrice ?? body.livePrice * 0.45,
        onSale: body.onSale ?? 0,
        isLive: body.isLive ?? true,
        isOnDemand: body.isOnDemand ?? false,
        isActive: body.isActive ?? true,
        duration: body.duration ?? null,
    });
    return newCourse;
};
