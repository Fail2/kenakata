import { api } from "@/lib/api";

interface LoginResponse {
    access_token: string;
    refresh_token: string;
}

interface LoginData {
    email: string;
    password: string;
}

export async function loginUser(data: LoginData): Promise<LoginResponse> {
    return api<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}