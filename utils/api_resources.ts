import { UserResponse, UserRequest, AuthResponse } from "./interfaces";

const SERVER_URL = "http://localhost:3000/api";
const AUTH = "/auth";
const USERS = "/users";

async function request(url: string, method: string, body = {}) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return response.json();
}

//cambiar UserResponse
export async function authenticate(body: UserRequest): Promise<AuthResponse> {
    return await request(SERVER_URL + AUTH, "POST", body);
}

export async function getUsers(): Promise<UserResponse[]> {
    return await request(SERVER_URL + USERS, "GET");
}
