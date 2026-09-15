import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <p className="text-6xl font-bold">404</p>

            <h1 className="mt-4 text-2xl font-semibold">
                Page not found
            </h1>

            <p className="mt-2 text-gray-500">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-black px-5 py-3 text-white"
            >
                Go back home
            </Link>
        </div>
    );
}