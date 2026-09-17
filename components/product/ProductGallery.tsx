"use client"

import { useState } from "react";

interface ProductGalleryProps {
    images: string[];
    title: string;
}

function getImageUrl(image?: string) {
    if (!image) return "/images/product-fallback.jpg";

    if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
    }

    if (image.startsWith("/")) {
        return image;
    }

    return "/images/product-fallback.jpg";
}

export default function ProductGallery({
    images,
    title,
}: ProductGalleryProps) {
    const validImages = images.map(getImageUrl).filter(Boolean);

    const [selectedImage, setSelectedImage] = useState(
        validImages[0] || "/images/product-fallback.jpg"
    );

    return (

        <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                    src={selectedImage}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            {
                validImages.length > 1 && (
                    <div className="mt-4 grid grid-cols-4 gap-3">
                        {
                            validImages.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className={`aspect-square overflow-hidden rounded-lg border-2 ${selectedImage === image ? "border-black" : "border-transparent"}`}>
                                    <img
                                        src={image}
                                        alt={`${title} ${index + 1}`}
                                        className="h-full w-full object-cover" />
                                </button>
                            ))}
                    </div>
                )}
        </div>
    )
}