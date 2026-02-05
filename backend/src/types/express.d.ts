import type { User } from "./users.types.ts";

declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}