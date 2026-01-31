import { defineMiddleware } from "astro:middleware";
import { verifyToken } from "./api/UsersRequests";

export const onRequest = defineMiddleware(async (context, next) => {
    const token = context.cookies.get("token")?.value;
    const isProtectedRoute = context.url.pathname.startsWith("/admin") && !context.url.pathname.includes("/login");

    if (isProtectedRoute) {
        if (!token) {
            return context.redirect("/admin/login");
        }
        
        const response = await verifyToken(token);

        if (response.ok) {
            context.locals.user = response.data;
        }
        else {
            console.log(response.message);
            return context.redirect("/admin/login");
        }
    }

    return next();
});