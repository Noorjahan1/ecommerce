import React from "react";
import ImageZoom from "../../component/Image/page";
import Image from "next/image";
import Discount from "@/app/component/Discount/page";
import Rating from "@/app/component/Rating/page";
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
    const { title, thumbnail, description, price,discountPercentage,stock,tags,brand,sku,weight,warrantyInformation,shippingInformation,availabilityStatus,reviews,rating,returnPolicy,minimumOrderQuantity } = product;

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
            <div className="relative w-full md:w-1/2 flex flex-col justify-center items-start gap-4 p-5 bg-white rounded-lg shadow-lg ">
                <Discount discount={discountPercentage} />
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-lg text-gray-700 mb-4">{description}</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">${price}</p>
                
                <div className="flex items-center gap-4 mb-4">
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Shipment: {shippingInformation}</p>
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Weight: {weight}</p>   
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Brand: {brand}</p>
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">SKU: {sku}</p>
                    
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Warranty:{warrantyInformation}</p>
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Return Policy: {returnPolicy}</p>   
                    <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md shadow-sm">Brand: {brand}</p>
                    
                </div>
                
                <h1 className="font-bold text-gray-700">Minimum Quantity: {minimumOrderQuantity}</h1>
                <Rating rating={rating}/>
                <h1 className="flex flex-wrap gap-2 mb-4 font-bold text-gray-600">
                    Status:<span  className={`${availabilityStatus === "In Stock" ? "text-green-800" : "text-red-700"} font-bold `}  > {availabilityStatus}</span>
                    
                    </h1>
                
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300">Add to Cart</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    );
}