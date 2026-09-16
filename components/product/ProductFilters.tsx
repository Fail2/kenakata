"use client"

import { useEffect, useMemo, useState } from "react";

import type { Category } from "@/types/category";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductFiltersProps {
    products: Product[];
    categories: Category[];
}

export default function ProductFilters({
    products,
    categories,
}: ProductFiltersProps) {
    const [search, setSearch] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = !debouncedSearch || product.title
                .toLocaleLowerCase()
                .includes(debouncedSearch.toLocaleLowerCase());

            const matchesCategory = !categoryId || product.category.id.toString() == categoryId;

            return matchesCategory && matchesSearch;
        });
    }, [products, debouncedSearch, categoryId])


    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                    <label htmlFor="product-search"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Search Products
                    </label>

                    <input
                        id="product-search"
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search products..."
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                    />
                </div>

                <div>
                    <label htmlFor="product-category"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Category
                    </label>

                    <select
                        id="product-category"
                        value={categoryId}
                        onChange={(event) => setCategoryId(event.target.value)}
                        className="h-12 w-full text-black rounded-lg border border-gray-300 bg-white px-4
                    outline-none transition focus:border-black focus:ring-1 focus:ring-black sm:min-w-56"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <h2 className="text-xl font-semibold">No Products found</h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Try changing your search or category.
                    </p>
                </div>


            )}

        </div>
    )
}