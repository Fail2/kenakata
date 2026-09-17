"use client";

import Link from "next/link";

import { useCart } from "@/store/cart.store";

export default function CartDrawer() {
    const {
        items,
        cartTotal,
        isCartOpen,
        closeCart,
        updateQuantity,
        removeFromCart,
    } = useCart();

    if (!isCartOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50">
            <button
                type="button"
                aria-label="Close cart"
                onClick={closeCart}
                className="absolute inset-0 h-full w-full bg-black/40" />

            <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between border-b px-5 py-4">
                    <h2 className="text-lg font-semibold">
                        Your Cart
                    </h2>

                    <button
                        type="button"
                        onClick={closeCart}
                        className="rounded-lg p-2 text-xl hover:bg-gray-100"
                        aria-label="Close cart">
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-5">
                    {items.length === 0 ? (
                        <div className="flex h-full items-center justify-center text-center">
                            <div>
                                <h3 className="font-semibold">
                                    Your cart is empty
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Add some products to your cart.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-4">
                                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={item.product.images?.[0] || '/images/product-fallback.jpg'}
                                            alt={item.product.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="line-clamp-2 text-sm font-medium">
                                            {item.product.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold">
                                            ${item.product.price}
                                        </p>

                                        <div className="mt-3 flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.product.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                                className="h-7 w-7 rounded border">
                                                -
                                            </button>

                                            <span className="text-sm">
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.product.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                                className="h-7 w-7 rounded border">
                                                +
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromCart(item.product.id)
                                                }
                                                className="ml-auto text-xs text-red-500">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                Total
                            </span>

                            <span className="text-xl font-bold">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <Link
                            href="/checkout"
                            className="mt-4 block w-full rounded-xl bg-black px-5 py-3 text-center font-semibold text-white">
                            Checkout
                        </Link>
                    </div>
                )}
            </aside>
        </div>
    );
}