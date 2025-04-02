'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 2 },
    { id: 3, name: 'Product 3', price: 30, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left">Product</th>
                  <th className="border-b py-2 text-center">Quantity</th>
                  <th className="border-b py-2 text-right">Price</th>
                  <th className="border-b py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value, 10))
                        }
                        className="w-16 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 text-right">${item.price * item.quantity}</td>
                    <td className="py-2 ml-5 text-right">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center float-right"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        <span className="ml-2">Remove</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">
                Total: <span className="text-gray-500">${calculateTotal()}</span>
              </p>
              <button className="bg-slate-400 text-white py-2 px-6 rounded-lg hover:bg-slate-600 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}