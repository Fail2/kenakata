import { api } from "@/lib/api";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    return api<Product[]>(`/products`);
}

export async function getProduct(id: string): Promise<Product> {
    return api<Product>(`/products/${id}`);
}