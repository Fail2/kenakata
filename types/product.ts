export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: ProductCategory;
    images: string[];
}