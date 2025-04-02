
import Navbar from '../app/navbar/page.js'; // Correct path to Navbar component
import "./global.css";
import Logo from '../app/Logo/page.js'; // Correct path to Logo component
 // Correct path to AuthProvider
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
        {/* Pass isLoggedIn, onLogin, and onLogout to Navbar */}
       {/* App content */}
        <Navbar  />
        
        <Logo />
        {children}
      </body>
    </html>
  );
}
