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

export interface CourseResponse {
    _id: string;
    title: string;
    description: string;
    livePrice: number;
    image: string;
    onDemandPrice: number;
    onSale: number;
    isLive: boolean;
    isOnDemand: boolean;
    isActive: boolean;
    duration: string | null;
    __v: number;
}

export interface CoursesResponse {
    courses: CourseResponse[];
}
