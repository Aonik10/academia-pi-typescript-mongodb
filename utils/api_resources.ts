import {
    AuthResponse,
    GetCoursesResponse,
    UserUpdate,
    UserResponse,
    UserCreate,
    GetUsersResponse,
    CourseCreate,
    CourseResponse,
} from "./interfaces";
import { SERVER_URL } from "./utils";

export async function request(url: string, method: "GET" | "POST" | "PUT" | "DELETE", body: any = null) {
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

interface FormDataRequestResponse {
    message: string;
    url: string;
}

export async function formDataRequest(
    path: string,
    body: FormData
): Promise<FormDataRequestResponse> {
    const response = await fetch(SERVER_URL + path, {
        method: "POST",
        body,
    });
    return response.json();
}

//cambiar UserResponse UserRequest (por any)
export async function authenticate(body: any): Promise<AuthResponse> {
    return await request(SERVER_URL + "/auth", "POST", body);
}

export async function getUsers(filter: string = ""): Promise<GetUsersResponse> {
    return await request(SERVER_URL + "/users?stringFilter=" + filter, "GET");
}

export async function getUserById(id: string): Promise<UserResponse> {
    return await request(SERVER_URL + "/users/users-by-id?id=" + id, "GET")
}

export async function createUser(body: UserCreate): Promise<UserResponse> {
    return await request(SERVER_URL + "/users", "POST", body)
}

export async function updateUser(id: string, body: UserUpdate): Promise<UserResponse> {
    return await request(SERVER_URL + "/users?id=" + id, "PUT", body);
}

export async function deleteUser(id: string): Promise<UserResponse> {
    return await request(SERVER_URL + "/users?id=" + id, "DELETE")
}

export async function getCourses(): Promise<GetCoursesResponse> {
    return await request(SERVER_URL + "/courses", "GET");
}

export async function getCourseById(id: string): Promise<CourseResponse> {
    return await request(SERVER_URL + "/courses/courses-by-id?id=" + id, "GET");
}

export async function createCourse(body: CourseCreate): Promise<CourseResponse> {
    return await request(SERVER_URL + "/courses", "POST", body)
}
