"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "@/store/cart.store";
import { checkoutSchema, type CheckoutFormData, } from "@/lib/validation";
import Link from "next/link";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });

    function onSubmit(data: CheckoutFormData) {
        console.log("Order placed:", data);

        clearCart();
        setOrderPlaced(true);
    }

    if (orderPlaced) {
        return (
            <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-12">
                <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">✓</div>
                    <h1 className="mt-6 text-3xl font-bold text-black">Order Placed Successfully!</h1>
                    <p className="mt-3 text-gray-500">Thank you for your order. We will process it shortly.</p>

                    <Link
                        href="/products"
                        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-12">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-black">Your cart is empty</h1>
                    <p className="mt-2 text-gray-500">Add some products before proceeding to checkout.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
            <div className="mb-10">
                <p className="text-sm font-medium text-gray-500">Secure Checkout</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Checkout</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 lg:grid-cols-[1fr_400px]">
                <section>
                    <h2 className="text-xl font-bold text-black">Customer Information</h2>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input id="name" type="text" placeholder="Enter your full name" {...register("name")}
                                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700"> Email </label>
                            <input id="email" type="email" placeholder="you@example.com" {...register("email")}
                                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />

                            {errors.email && (<p className="mt-1 text-sm text-red-500">{errors.email.message}</p>)}
                        </div>

                        <div>
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                            <input id="phone" type="tel" placeholder="+880 1XXXXXXXXX" {...register("phone")}
                                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />

                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>)}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                            <textarea id="address" rows={4} placeholder="Enter your full address" {...register("address")}
                                className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />
                            {errors.address && (
                                <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>)}
                        </div>
                    </div>
                </section>

                <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6">
                    <h2 className="text-xl font-bold text-black">Order Summary</h2>
                    <div className="mt-6 space-y-5">
                        {items.map((item) => (
                            <div key={item.product.id} className="flex gap-4">
                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                    <img src={item.product.images?.[0]} alt={item.product.title} className="h-full w-full object-cover" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="line-clamp-2 text-sm font-medium text-black">{item.product.title}</h3>
                                    <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="text-sm font-semibold text-black">${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-5">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Total</span>
                            <span className="text-2xl font-bold text-black">${cartTotal.toFixed(2)}</span>
                        </div>

                        <button type="submit" className="mt-6 w-full rounded-xl bg-black px-5 py-4 font-semibold text-white transition hover:bg-gray-800">
                            Place Order
                        </button>
                    </div>
                </aside>
            </form>
        </div>
    );
}