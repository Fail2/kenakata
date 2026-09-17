"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "@/services/auth.service";
import { useAuth } from "@/store/auth.store";
import { loginSchema, type LoginFormData, } from "@/lib/validations";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [serverError, setServerError] = useState("");

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema), });

    async function onSubmit(data: LoginFormData) {
        try {
            setServerError("");

            const response = await loginUser(data);

            login(response.access_token, response.refresh_token);

            router.push("/");
        } catch {
            setServerError(
                "Invalid email or password. Please try again."
            );
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-500">Welcome back</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Login to KENAKATA</h1>
                    <p className="mt-2 text-sm text-gray-500">Sign in to continue shopping.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input id="email" type="email" placeholder="you@example.com" {...register("email")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mt-5">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" {...register("password")}
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black" />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {serverError && (
                        <p className="mt-4 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700">{serverError}</p>
                    )}

                    <button type="submit" disabled={isSubmitting}
                        className="mt-6 w-full rounded-xl bg-black px-5 py-3.5 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60">
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-semibold text-black hover:underline"> Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}