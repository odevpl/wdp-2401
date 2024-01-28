import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { addProductRating } from '../../../redux/productsRedux';

const ProductStars = ({ id, stars, myRating }) => {
  const dispatch = useDispatch();

  const handleClickStar = (idProduct, starKey) => e => {
    e.preventDefault();
    dispatch(addProductRating({ idProduct, starKey }));
  };

  if (myRating !== 0) {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#' onClick={handleClickStar(id, i)}>
            {i <= myRating ? (
              <FontAwesomeIcon icon={faStar} className={styles.myRating}>
                {i} stars
              </FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    );
  }

  if (myRating === 0) {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#' onClick={handleClickStar(id, i)}>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    );
  }
};

ProductStars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  myRating: PropTypes.number,
};

export default ProductStars;
