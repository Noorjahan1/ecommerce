import React from 'react';
import styles from './Discount.module.css'; // Import CSS module for styling

export default function Discount({ discount }) {
  return (
  
      <div className={styles.discountStar}>
        <h3 className={styles.discountText}>{discount} %<br/> Off</h3>
      </div>
    
  );
}

