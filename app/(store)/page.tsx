import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/services/product.service";

export default async function HomePage() {

    const products = await getProducts();
    const featuredProducts = products.slice(0, 8);
    return (
        <div>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-24">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
                            Welcome to KENAKATA
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl"> Discover products you'll love.</h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Find quality products at great prices, all in one place.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/products"
                                className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">
                            Our selection
                        </p>
                        <h2 className="mt-1 text-3xl font-bold">
                            Featured Products
                        </h2>
                    </div>
                </div>
                {featuredProducts.length > 0 ? (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-8 text-gray-500">
                        No products available.
                    </p>
                )}
            </section>

            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <h2 className="text-3xl font-bold">Shop by Category</h2>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg;grid-cols-4">
                        <div className="h-40 rounded-xl bg-gray-200" />
                        <div className="h-40 rounded-xl bg-gray-200" />
                        <div className="h-40 rounded-xl bg-gray-200" />
                        <div className="h-40 rounded-xl bg-gray-200" />
                    </div>
                </div>
            </section>
        </div>
    )
}