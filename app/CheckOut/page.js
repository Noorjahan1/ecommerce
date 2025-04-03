'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Link from 'next/link'; // Import Link for navigation

export default function Checkout() {
  const router = useRouter(); // Initialize the router for navigation
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
    alert('Order placed successfully!');
  };

  const handleCancel = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-2xl overflow-y-auto max-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Shipping Information</h3>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="State"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    ZIP
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="ZIP"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h3>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="mt-6 text-center space-x-4">
            <button
              type="submit"
              className="bg-slate-400 text-white py-3 px-8 rounded-lg hover:bg-slate-500 transition duration-300 shadow-md"
            >
              Place Order
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>

       

        {/* Stripe Logo */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Secure checkout powered by Stripe</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            alt="Stripe Logo"
            className="mx-auto mt-2 w-32"
          />
        </div>

        {/* Terms and Conditions Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">By placing an order, you agree to our</p>
          <button
            onClick={() => setShowTerms(true)}
            className="text-blue-500 hover:underline"
          >
            Terms and Conditions
          </button>
        </div>
      </div>

      {/* Terms and Conditions Popup */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h3>
            <p className="text-gray-600 mb-4">
              By using this website and placing an order, you agree to our terms and conditions.
              These include but are not limited to compliance with our policies, payment terms,
              and shipping guidelines. Please read carefully before proceeding.
            </p>
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowTerms(false)}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}