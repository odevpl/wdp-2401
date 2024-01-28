import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductStars = ({ id, stars, myRating }) => {
  if (myRating !== 0) {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
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
          <a key={i} href='#'>
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
