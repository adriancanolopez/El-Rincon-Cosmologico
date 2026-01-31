interface User {
    username: string,
    email: string,
    role: "editor" | "admin",
}

declare namespace App {
    interface Locals {
        user?: User
    }
}