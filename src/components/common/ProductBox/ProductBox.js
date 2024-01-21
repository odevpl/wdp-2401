import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import { toggleProductCompared } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  image,
  favorite,
  compared,
  oldPrice,
}) => {
  const dispatch = useDispatch();

  const handleClickFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
  };

  const handleClickCompared = e => {
    e.preventDefault();
    dispatch(toggleProductCompared(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={process.env.PUBLIC_URL + `/images/furnitures/${image}.webp`}
        />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
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
          <Button variant='outline' onClick={handleClickFavorite} className={clsx(favorite && styles.active)} favorite={favorite}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={clsx(compared && styles.active)}
            onClick={handleClickCompared}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small' className={styles.priceBtn}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  favorite: PropTypes.bool,
  compared: PropTypes.bool,
};

export default ProductBox;
