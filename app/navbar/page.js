import React from 'react'
import styles from './navbar.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faShoppingCart, faShop } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav  >
        <ul className="flex  items-center">
          <li className="mr-6">
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li className="mr-6">
            <a href="/shop" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faShop} className="mr-2" />
              Shop
            </a>
          </li>
          <li className="mr-6">
            <a href="/shoppingCart" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Shopping Cart
            </a>
          </li>
          <li className={styles.login}>
            <a href="/login" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
