import { api } from "@/lib/api";
import type { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
    return api<User[]>("/users");
}

export async function getUser(id: string): Promise<User> {
    return api<User>(`/users/${id}`);
}