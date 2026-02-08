export type Role = "editor" | "admin";

export interface User {
    username: string,
    email: string,
    role: Role
};

export interface LoginCredentials {
    email: string,
    password: string
};

type ApiResponse<T> = { ok: true, data: T } | { ok: false, message: string };

export type LoginResponse = ApiResponse<User>;

export type VerifyTokenResponse = ApiResponse<User>;