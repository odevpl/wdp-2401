import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';

import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

const Promotion = ({ favorite, compared }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-around'>
          <div className={styles.productCard}>
            <div className={styles.heading}>
              <h5>HOT DEALS</h5>
              <div className={styles.dots}>
                <ul>
                  <li>
                    <a className={styles.active}></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.photo}>
              <img
                className={styles.image}
                alt='furniture'
                src='/images/furnitures/20.webp'
              />
              <div className={styles.addButton}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.timer}>
                <div className={styles.time}>
                  <p>25</p>
                  <p>DAYS</p>
                </div>
                <div className={styles.time}>
                  <p>10</p>
                  <p>HRS</p>
                </div>
                <div className={styles.time}>
                  <p>45</p>
                  <p>MINS</p>
                </div>
                <div className={styles.time}>
                  <p>30</p>
                  <p>SECS</p>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h5>Aenean Ru Bristique 20</h5>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= 2 ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.actions}>
              <div className={styles.outlines}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faEye}>Viev</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={clsx(favorite && styles.active)}
                  >
                    Favorite
                  </FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    className={clsx(compared && styles.active)}
                  >
                    Add to compare
                  </FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.oldPrice}>$40.00</div>
              <div className={styles.price}>
                <Button noHover variant='small' className={styles.priceBtn}>
                  $ 30.00
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.featuredProduct}>
            <div className={styles.featuredPhoto}>
              <img
                className={styles.image}
                alt='furniture'
                src='/images/furnitures/15.webp'
              />
              <div className={styles.imageText}>
                <p>
                  INDOOR <span>FURNITURE</span>
                </p>
                <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                <Button variant='small' className={styles.shopButton}>
                  SHOP NOW
                </Button>
              </div>
            </div>
            <div className={styles.backgroundButtons}>
              <a className={styles.button}>
                <FontAwesomeIcon icon={faArrowLeft}>Viev</FontAwesomeIcon>
              </a>
              <a className={styles.button}>
                <FontAwesomeIcon icon={faArrowRight}>Viev</FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotion.propTypes = {
  children: PropTypes.node,
  favorite: PropTypes.bool,
  compared: PropTypes.bool,
};

export default Promotion;
