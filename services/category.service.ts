import { api } from "@/lib/api";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
    return api<Category[]>("/categories");
}