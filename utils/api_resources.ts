import { UserResponse, UserRequest, AuthResponse, CoursesResponse, CourseResponse } from "./interfaces";

const SERVER_URL = "http://localhost:3000/api";
const AUTH = "/auth";
const USERS = "/users";
const COURSES = "/courses";
const COURSES_BY_ID = "/courses/courses-by-id?id=";

async function request(url: string, method: string, body = null) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
    });

    return response.json();
}

//cambiar UserResponse UserRequest (por any)
export async function authenticate(body: any): Promise<AuthResponse> {
    return await request(SERVER_URL + AUTH, "POST", body);
}

export async function getUsers(): Promise<UserResponse[]> {
    return await request(SERVER_URL + USERS, "GET");
}

export async function getCourses(): Promise<CoursesResponse> {
    return await request(SERVER_URL + COURSES, "GET");
}

export async function getCourseById(id: string): Promise<{ course: CourseResponse }> {
    return await request(SERVER_URL + COURSES_BY_ID + id, "GET");
}
