export type Role = "editor" | "admin";

export interface User {
    username: string,
    email: string,
    role: Role,
}