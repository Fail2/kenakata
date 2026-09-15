export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

                <p className="mt-4 text-sm text-gray-500">
                    Loading...
                </p>
            </div>
        </div>
    );
}