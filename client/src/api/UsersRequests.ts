import type { LoginCredentials, LoginResponse, VerifyTokenResponse } from "../types/users.types";

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
    const request = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });

    const data = await request.json();

    let response: LoginResponse;

    if (request.ok) {
        response = {ok: true, data};
    }
    else {
        response = {ok: false, message: data.message}
    }

    return response;
}

export async function logout(): Promise<Response> {
    const request = await fetch("http://localhost:3000/users/logout", {
        method: "POST",
        credentials: 'include'
    });

    return request;
}

export async function verifyToken(token: string): Promise<VerifyTokenResponse> {
    const request = await fetch("http://localhost:3000/users/verify-token", {
        method: "GET",
        headers: {
            "Cookie": `token=${token}`
        }
    });

    const data = await request.json();

    if (request.ok) {
        return {ok: true, data};
    }
    else {
        return {ok: false, message: data.message};
    }
}