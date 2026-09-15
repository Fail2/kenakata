import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="group overlflow-hidden rounded-xl border bg-white">
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width:640px) 100vw, (max-width: 1024)50vw, 25vw"
                    />
                </div>
                <div className="p-4">
                    <p className="line-clamp-1 text-sm text-gray-500">
                        {product.category.name}
                    </p>

                    <h3 className="mt-1 line-clamp-2 font-semibold">
                        {product.title}
                    </h3>

                    <p className="mt-3 text-lg font-bold">
                        ${product.price}
                    </p>
                </div>
            </Link>
        </article>
    )
}