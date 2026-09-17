import AddToCartButton from "@/components/product/AddToCartButton";
import ProductCard from "@/components/product/ProductCard";
import ProductGallery from "@/components/product/ProductGallery";
import { getProduct, getProducts } from "@/services/product.service";

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductDetailsPage({
    params,
}: ProductDetailsPageProps) {
    const { id } = await params;

    const [product, products] = await Promise.all([
        getProduct(id),
        getProducts(),
    ]);

    const availableItems = Math.floor(product.price / 2);

    const relatedProducts = products
        .filter(
            (item) =>
                item.category.id === product.category.id &&
                item.id !== product.id
        )
        .slice(0, 4);

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <ProductGallery
                    images={product.images}
                    title={product.title}
                />
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        {product.category.name}
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {product.title}
                    </h1>

                    <p className="mt-6 text-3xl font-bold">
                        ${product.price}
                    </p>

                    <div className="mt-8 border-t pt-8">
                        <h2 className="text-sm font-semibold">
                            Description
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            {product.description}
                        </p>
                    </div>

                    <AddToCartButton product={product} />
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <section className="mt-20 border-t pt-12">
                    <div>
                        <p className="text-sm font-medium text-gray-500">
                            You may also like
                        </p>

                        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                            Related Products
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard
                                key={relatedProduct.id}
                                product={relatedProduct}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}