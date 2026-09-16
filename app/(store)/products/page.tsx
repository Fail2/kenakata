import ProductFilters from "@/components/product/ProductFilters";
import { getCategories } from "@/services/category.service";
import { getProducts } from "@/services/product.service";

export default async function ProductsPage() {
    const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);

    return (
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-16">
            {/* <div className="max-w-2xl">
                <p className="text-sm font-medium text-gray-500">
                    Shop our collection
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                    All Products
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    Discover products from our collection.
                </p>
            </div> */}

            <div className="mt-8 sm:mt-10">
                <ProductFilters
                    products={products}
                    categories={categories}
                />
            </div>
        </div>
    );
}