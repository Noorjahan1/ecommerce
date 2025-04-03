'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import useCart from CartContext
import RecommendedProduct from '../RecommendedProduct/page'; // Import RecommendedProduct component
import Link from 'next/link';

export default function ShoppingCart() {
  const { cart, setCart } = useCart(); // Access the cart and setCart from the context
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (total - discount).toFixed(2);
  };

  const applyCoupon = () => {
    setError('');
    if (coupon === 'DISCOUNT10') {
      setDiscount(10); // Apply a $10 discount
    } else if (coupon === 'DISCOUNT20') {
      setDiscount(20); // Apply a $20 discount
    } else {
      setError('Invalid coupon code');
      setDiscount(0);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {/* Shopping Cart Table */}
              <div className="bg-gray-50 my-5 p-4 rounded-lg shadow-md">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center">
                      {/* Updated Image Rendering */}
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <p className="text-lg font-medium text-gray-800">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {/* Quantity Controls */}
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                      <p className="text-lg font-bold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {/* Remove Item */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Apply Coupon</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Apply
                  </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {discount > 0 && (
                  <p className="text-green-500 mt-2">Coupon applied! You saved ${discount}.</p>
                )}
              </div>

              {/* Total and Checkout Section */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-bold text-gray-800">Total:</p>
                  <p className="text-lg font-bold text-gray-500">${calculateTotal()}</p>
                </div>
                <div className="text-right">
                  <Link
                    href="/CheckOut"
                    className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="p-10 w-full flex items-center justify-center bg-gray-100">
        <RecommendedProduct />
      </div>
    </>
  );
}