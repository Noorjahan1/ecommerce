import Navbar from './navbar/page.js'; // Import Navbar component
import Logo from '../app/Logo/page.js'; // Import Logo component
import Category from './category/page.js'; // Import Category component
import Product from './product/page.js'; // Import Product component
import "./global.css"; // Import global styles
import { CartProvider } from './context/CartContext'; // Import CartProvider
import {  AuthProvider } from './context/AuthContext.js';

const meta = {
  title: 'Ecommerce Site',
  description: 'An ecommerce site built with Next.js',
  keywords: 'ecommerce, next.js, react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{meta.title}</title>
      </head>
      <body>
        <AuthProvider>
<CartProvider> {/* Wrap the app with CartProvider */}
          <Navbar />
          <Logo />
         
          
          {children}
</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
// Export AuthProvider for use in other components