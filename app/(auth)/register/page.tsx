"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createUser } from "@/services/user.service";
import {
    registerSchema,
    type RegisterFormData,
} from "@/lib/validations";

export default function RegisterPage() {
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormData) {
        try {
            setServerError("");

            await createUser({
                name: data.name,
                email: data.email,
                password: data.password,
                avatar: "https://api.dicebear.com/9.x/initials/svg?seed=" + data.name,
            });

            router.push("/login");
        } catch {
            setServerError(
                "Unable to create account. Please try again."
            );
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-500">
                        Join KENAKATA
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Create an account to start shopping.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                        />

                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            {...register("email")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            {...register("password")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                        />

                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            {...register("confirmPassword")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black"
                        />

                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {serverError && (
                        <p className="mt-4 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700">
                            {serverError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-6 w-full rounded-xl bg-black px-5 py-3.5 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Creating account..." : "Create Account"}
                    </button>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-black hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}