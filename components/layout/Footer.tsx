export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} KENAKATA. All rights reserved.
            </div>
        </footer>
    )
}