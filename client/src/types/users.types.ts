export interface User {
    username: string,
    email: string,
    role: "editor" | "admin"
};

export interface LoginCredentials {
    email: string,
    password: string
};

export type LoginResponse = {ok: true, data: User} | {ok: false, message: string };

export type VerifyTokenResponse = LoginResponse;