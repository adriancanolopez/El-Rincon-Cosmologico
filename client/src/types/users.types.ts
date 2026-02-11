export type Role = "editor" | "admin";

export interface User {
    username: string,
    email: string,
    role: Role
};

export interface FullUser {
    _id: string,
    username: string,
    email: string,
    password: string,
    role: Role,
    createdAt: string,
    updatedAt: string
}

export interface LoginCredentials {
    email: string,
    password: string
};

export interface RegisterCredentials {
    username: string,
    email: string,
    password: string,
    role: Role
};

type ApiResponse<T> = { ok: true, data: T } | { ok: false, message: string };

export type LoginResponse = ApiResponse<User>;

export type RegisterResponse = ApiResponse<User>;

export type VerifyTokenResponse = ApiResponse<User>;

export type GetUsersResponse = ApiResponse<FullUser[]>;

export type ChangeRoleResponse = ApiResponse<FullUser[]>;