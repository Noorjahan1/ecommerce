'use client';
import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13+

// Initial state for the auth context
const initialState = {
    user: null, // User is null when not logged in
};

// Reducer function to handle auth actions
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }; // Set the user data
        case 'LOGOUT':
            return { ...state, user: null }; // Clear the user data
        default:
            return state;
    }
}

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app
export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const router = useRouter();

    // Function to log in a user
    const login = useCallback((userData) => {
        dispatch({ type: 'LOGIN', payload: userData }); // Dispatch login action
        localStorage.getItem('accessToken'); // Save user data to localStorage
        router.push('/'); // Redirect to the homepage or dashboard after login
    }, [router]);

    // Function to log out a user
    const logout = useCallback(() => {
        dispatch({ type: 'LOGOUT' }); // Dispatch logout action
        localStorage.removeItem('accessToken'); // Remove user data from localStorage
        router.push('/Login'); // Redirect to the login page
    }, [router]);

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}



