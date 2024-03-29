import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleProductFavorite,
  toggleProductCompared,
  getComparedProducts,
} from '../../../redux/productsRedux';
import ProductStars from '../ProductStars/ProductStars';

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
  myRating,
}) => {
  const dispatch = useDispatch();
  const comparedProducts = useSelector(state => getComparedProducts(state));

  const handleClickFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
  };

  const handleClickCompared = e => {
    e.preventDefault();
    if (comparedProducts.length < 4) dispatch(toggleProductCompared(id));
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
        <ProductStars id={id} stars={stars} myRating={myRating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={handleClickFavorite}
            className={clsx(favorite && styles.active)}
            favorite={favorite}
          >
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
  myRating: PropTypes.number,
};

export default ProductBox;
