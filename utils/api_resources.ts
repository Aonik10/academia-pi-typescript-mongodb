import {
    UserResponse,
    AuthResponse,
    GetCoursesResponse,
    getCourseById,
    UserUpdate,
    UserUpdateResponse,
} from "./interfaces";

const SERVER_URL = "http://localhost:3000/api";
const AUTH = "/auth";
const USERS = "/users/";
const COURSES = "/courses";
const COURSES_BY_ID = "/courses/courses-by-id?id=";

async function request(url: string, method: string, body: any = null) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
        next: {
            revalidate: 1,
        },
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

export async function updateUser(id: string, body: UserUpdate): Promise<UserUpdateResponse> {
    return await request(SERVER_URL + USERS + "?id=" + id, "PUT", body);
}

export async function getCourses(): Promise<GetCoursesResponse> {
    return await request(SERVER_URL + COURSES, "GET");
}

export async function getCourseById(id: string): Promise<getCourseById> {
    return await request(SERVER_URL + COURSES_BY_ID + id, "GET");
}
