import ProductCard from "@/components/product/ProductCard";
import CategoryCard from "@/components/product/CategoryCard";
import { getProducts } from "@/services/product.service";
import { getCategories } from "@/services/category.service";

export default async function HomePage() {

    const [products, categories] = await Promise.all([getProducts(), getCategories()]);

    const featuredProducts = products.slice(0, 8);
    const featuredCategories = categories.slice(0, 4);

    return (
        <div>
            <section className="">
                <div className="mx-auto max-w-7xl px-4 py-24" style={{ backgroundImage: "url('/images/Hero-Banner 1.jpg')" }}>
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
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        Browse By
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                        Categories
                    </h2>
                </div>
                {featuredCategories.length > 0 ? (<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredCategories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>) :
                    (<p className="mt-8 text-gray-500" >No categories available</p>)}
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
        </div >
    )
}