import { api } from "@/lib/api";
import type { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
    return api<User[]>("/users");
}

export async function getUser(id: string): Promise<User> {
    return api<User>(`/users/${id}`);
}

interface CreateUserData {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export async function createUser(
    data: CreateUserData
): Promise<User> {
    return api<User>("/users", {
        method: "POST",
        body: JSON.stringify(data),
    });
}