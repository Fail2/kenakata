"use client";

import { useCart } from "@/store/cart.store"; import Link from "next/link";

export default function Header() {
    const { cartCount, openCart } = useCart();
    return (
        <header className="border-b sticky top-0 z-40 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-2xl font-bold">KENAKATA</Link>

                <nav className="flex items-center gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <button
                        type="button"
                        onClick={openCart}
                        aria-label={`Cart with ${cartCount} items`}
                        className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100">
                        <span>Cart</span>

                        <span className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.086.835l.383 1.437m0 0L6.75 15.75A2.25 2.25 0 0 0 8.928 17.5h7.144a2.25 2.25 0 0 0 2.178-1.75l1.645-6.578a1.125 1.125 0 0 0-1.091-1.397H5.105Zm3.895 12.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0-1.5-1.5Z"
                                />
                            </svg>

                            {cartCount > 0 && (
                                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-semibold leading-none text-white">
                                    {cartCount}
                                </span>
                            )}
                        </span>
                    </button>
                    <Link href="/login">Login</Link>

                </nav>
            </div>
        </header>
    )
}