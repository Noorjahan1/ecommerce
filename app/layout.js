import Navbar from '../app/navbar/page.js'; // Correct path to Navbar component
import "./global.css";
import Logo from '../app/Logo/page.js'; // Correct path to Logo component
import { CartProvider } from './context/CartContext'; // Import CartProvider

const meta = {
  title: 'Ecommerce Site',
  description: 'An ecommerce site built with Next.js',
  keywords: 'ecommerce, next.js, react',
}

export default function RootLayout({ children }) {
  // Manage auth state locally
  return (
    <html lang="en">
      <head>
        <title>{meta.title}</title>
      </head>
      <body>
        <CartProvider>
          {/* Pass isLoggedIn, onLogin, and onLogout to Navbar */}
          {/* App content */}
          <Navbar />
          <Logo />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
