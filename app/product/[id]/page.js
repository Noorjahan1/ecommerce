import React from "react";
import ProductClient from "./ProductClient"; // Import the client component

export default async function Product({ params }) {
    const { id } = params;

    // Fetch product data
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        console.error("Failed to fetch product data");
        return <div>Error loading product details.</div>;
    }
    const product = await res.json();

    // Pass the fetched product data to the client component
    return <ProductClient product={product} />;
}