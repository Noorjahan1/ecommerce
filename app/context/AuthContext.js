'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13+

// Create the AuthContext with default values
export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

// AuthProvider component to wrap the app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // State to hold user data
  const router = useRouter(); // Initialize router for redirection

  // Synchronize user state with localStorage using useEffect
  useEffect(() => {
    const storedUser = localStorage.getItem('accessToken');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user state
    }
  }, []); // Run only once when the component mounts

  // Function to log in a user
  const login = (userData) => {
    setUser(userData); // Set user state with the provided data

    router.push(`/User/${localStorage.getItem("accessToken")}`); // Redirect to the user's dashboard using their id
  };

  // Function to log out a user
  const logout = () => {
    localStorage.removeItem('accessToken'); // Remove user data from localStorage
    setUser(null); // Reset user state
    router.push('/Login'); // Redirect to the login page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}