'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

export default function UserDashboard() {
  const [userData, setUserData] = useState(null); // State to hold user data
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('accessToken');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Parse the stored accessToken
        setUserData(parsedUser); // Set user data in state
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('accessToken'); // Clear invalid data
        router.push('/Login'); // Redirect to login page
      }
    } else {
      router.push('/Login'); // Redirect to login page if no user data is found
    }
  }, [router]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">User Dashboard</h1>
        <p className="text-center text-gray-600 mb-6">Welcome to your personalized dashboard!</p>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Username:</span> {userData.username || 'N/A'}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Email:</span> {userData.email || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
