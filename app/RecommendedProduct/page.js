'use client';
import React from 'react';
import { useCart } from '../context/CartContext';

export default function RecommendedProduct() {
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const recommendedProducts = [
    { id: 1, name: 'Gaming Headset with Mic', price: 18.95, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/7.webp' },
    { id: 2, name: 'Apple Watch Series 1 Sport', price: 120.0, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/5.webp' },
    { id: 3, name: 'Men\'s Denim Jeans Shorts', price: 80.5, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/9.webp' },
    { id: 4, name: 'Mens T-shirt Cotton Base Layer Slim fit', price: 13.9, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/10.webp' },
    { id: 5, name: 'Wireless Bluetooth Speaker', price: 45.0, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/8.webp' },
    { id: 6, name: 'Smartphone with 128GB Storage', price: 299.99, image: 'https://mdbootstrap.com/img/bootstrap-ecommerce/items/6.webp' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
              <p className="text-gray-500 mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-slate-400 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}