import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/types/category";

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link
            href={`/products?category=${category.id}`}
            className="group overflow-hidden rounded-xl bg-white"
        >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover block transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-black">{category.name}</h3>
            </div>
        </Link>
    )
}