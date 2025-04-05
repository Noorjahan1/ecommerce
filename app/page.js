'use client';
import React, { useEffect, useContext } from 'react';
import './global.css';
import Logo from '../app/Logo/page.js';
import { CartProvider } from './context/CartContext';
import { AuthProvider, AuthContext } from './context/AuthContext'; // Import AuthContext
import Navbar from './navbar/page';
import Product from "./product/page";
import Category from "./category/page";



export default function Home() {
  return (
   
    <>
      
         <Category /><Product />
       </> 
    
  );
}