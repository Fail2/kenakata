"use client";

import { useCart } from "@/store/cart.store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({
    product,
}: AddToCartButtonProps) {
    const { addToCart, isInCart, openCart } = useCart();

    const added = isInCart(product.id);

    if (added) {
        return (
            <button
                type="button"
                onClick={openCart}
                className="mt-8 block w-full rounded-xl bg-black px-6 py-4 text-center font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
            >
                View Cart
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-8 w-full rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
        >
            Add to Cart
        </button>
    );
}