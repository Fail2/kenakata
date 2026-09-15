import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-2xl font-bold">KENAKATA</Link>

                <nav className="flex items-center gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/products">products</Link>
                    <Link href="/cart">Cart</Link>
                    <Link href="/login">Login</Link>

                </nav>
            </div>
        </header>
    )
}