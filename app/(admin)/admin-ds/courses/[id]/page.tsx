import "bootstrap/dist/css/bootstrap.css";

import { getCourseById } from "@/utils/api_resources";

interface CourseDetailsProps {
    params: {
        id: string;
    };
}

export default async function CourseDetails({ params }: CourseDetailsProps) {
    const { id } = params;
    const response = await getCourseById(id);
    return <div>{JSON.stringify(response.course)}</div>;
}
