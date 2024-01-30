import React from 'react';
import styles from './Sale.module.scss';

const Sale = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-around'>
          <div className={styles.leftBox}>
            <img
              className={styles.boxImage}
              alt='furniture'
              src='/images/furnitures/2.webp'
            />
            <div className={styles.boxText}>
              <p>GUEST ROOM</p>
              <p>SOFA</p>
              <p>-20%</p>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.firstProduct}>
              <img
                className={styles.firstImage}
                alt='furniture'
                src='/images/furnitures/4.webp'
              />
              <div className={styles.firstText}>
                <p>
                  <span>OFFICE</span> CHAIR
                </p>
                <p>COLLECTION</p>
                <p>$200.00</p>
              </div>
              <img
                className={styles.firstImage}
                alt='furniture'
                src='/images/furnitures/17.webp'
              />
            </div>
            <div className={styles.secondProduct}>
              <img
                className={styles.secondImage}
                alt='furniture'
                src='/images/furnitures/7.webp'
              />
              <div className={styles.secondText}>
                <p>
                  <span>SPECIAL</span> COLLECTION
                </p>
                <p>SAVE UP 45% OF FURNITURE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
