import React from "react";
import ImageZoom from "./Image/page";

export default async function Product({ params }) {
    const { id } = params;

    // Fetch product data
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        console.error("Failed to fetch product data");
        return <div>Error loading product details.</div>;
    }
    const product = await res.json();

    // Destructure product details
    const { title, thumbnail, description, price } = product;

    return (
        <div className="p-5 flex flex-col md:flex-row items-start gap-8">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
                <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">   
                    <div className="absolute inset-0 bg-gray-200 animate-pulse">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ImageZoom thumbnail={thumbnail} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 p-5 bg-white rounded-lg shadow-lg mt-[100px]">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-lg text-gray-700 mb-4">{description}</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">${price}</p>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300">Add to Cart</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300">Buy Now</button>

                </div>
            </div>
        </div>
    );
}