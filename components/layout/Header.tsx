"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/store/auth.store";
import { useCart } from "@/store/cart.store";

export default function Header() {
    const { cartCount, openCart } = useCart();
    const { isAuthenticated, logout } = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function handleCartClick() {
        openCart();
        closeMenu();
    }

    function handleLogout() {
        logout();
        closeMenu();
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold"
                >
                    KENAKATA
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/"
                        className="transition hover:text-gray-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="transition hover:text-gray-600"
                    >
                        Products
                    </Link>

                    <button
                        type="button"
                        onClick={openCart}
                        aria-label={`Cart with ${cartCount} items`}
                        className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
                    >
                        <span>Cart</span>

                        <span className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.086.835l.383 1.437m0 0L6.75 15.75A2.25 2.25 0 0 0 8.928 17.5h7.144a2.25 2.25 0 0 0 2.178-1.75l1.645-6.578a1.125 1.125 0 0 0-1.091-1.397H5.105Zm3.895 12.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                                />
                            </svg>

                            {cartCount > 0 && (
                                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-semibold leading-none text-white">
                                    {cartCount}
                                </span>
                            )}
                        </span>
                    </button>

                    {isAuthenticated ? (
                        <button
                            type="button"
                            onClick={logout}
                            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:border-black hover:bg-black hover:text-white"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
                        >
                            Login
                        </Link>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="border-t border-gray-200 bg-white md:hidden"
                >
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 font-medium transition hover:bg-gray-100"
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 font-medium transition hover:bg-gray-100"
                        >
                            Products
                        </Link>

                        <button
                            type="button"
                            onClick={handleCartClick}
                            className="flex items-center justify-between rounded-lg px-3 py-3 text-left font-medium transition hover:bg-gray-100"
                        >
                            <span>Cart</span>

                            {cartCount > 0 && (
                                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-2 text-xs font-semibold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <div className="my-2 border-t border-gray-200" />

                        {isAuthenticated ? (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="rounded-lg px-3 py-3 text-left font-medium transition hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-3 font-medium transition hover:bg-gray-100"
                            >
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}