export interface Error {
    message: string;
    error: string;
}

export interface AuthResponse {
    message: string;
    user?: UserResponse; // cambiar
    error?: any;
}

export interface UserRequest {
    email: string;
    password: string;
    remember: boolean;
}

export interface UserResponse {
    _id: string;
    email: string;
    username: string;
    password: string;
}
