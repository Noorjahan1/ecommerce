'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import styles from './navbar.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faShoppingCart, faShop } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { user, logout } = useContext(AuthContext); // Use AuthContext to get user and logout function

  return (
    <div className={styles.navbar}>
      <nav>
        <ul className="flex items-center">
          <li className="mr-6">
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li className="mr-6">
            <a href="/" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faShop} className="mr-2" />
              Shop
            </a>
          </li>
          <li className="mr-6">
            <a href="/ShoppingCart" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Shopping Cart
            </a>
          </li>
          <li className={styles.login}>
            {user ? (
              <button
                onClick={logout} // Call logout function directly
                className="text-white flex items-center hover:text-gray-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                Logout
              </button>
            ) : (
              <a href="/Login" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                Login
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;