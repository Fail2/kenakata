"use client";

import { useCart } from "@/store/cart.store";

export default function CheckoutPage() {
    const { items, cartTotal } = useCart();

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
            <div className="mb-10">
                <p className="text-sm font-medium text-gray-500">
                    Secure Checkout
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    Checkout
                </h1>
            </div>

            {items.length === 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                    <h2 className="text-xl font-semibold text-black">
                        Your cart is empty
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Add some products before proceeding to checkout.
                    </p>
                </div>
            ) : (
                <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
                    <section>
                        <h2 className="text-xl font-bold text-black">
                            Customer Information
                        </h2>
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+880 1XXXXXXXXX"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Address
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Enter your full address"
                                    className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                                />
                            </div>
                        </div>
                    </section>

                    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6">
                        <h2 className="text-xl font-bold text-black">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-5">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-4">
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={item.product.images?.[0]}
                                            alt={item.product.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="line-clamp-2 text-sm font-medium text-black">
                                            {item.product.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <p className="text-sm font-semibold text-black">
                                        ${(item.product.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-5">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">
                                    Total
                                </span>

                                <span className="text-2xl font-bold text-black">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <button
                                type="button"
                                className="mt-6 w-full rounded-xl bg-black px-5 py-4 font-semibold text-white transition hover:bg-gray-800">
                                Place Order
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}