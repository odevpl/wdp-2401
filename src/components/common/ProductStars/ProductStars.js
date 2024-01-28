import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { addProductRating } from '../../../redux/productsRedux';

const ProductStars = ({ id, stars, myRating }) => {
  const dispatch = useDispatch();

  const [componentOnHover, setComponentOnHover] = useState(false);
  const [hoveredStars, setHoveredStars] = useState(null);

  const handleComponentHover = () => {
    setComponentOnHover(true);
  };

  const handleComponentLeave = () => {
    setComponentOnHover(false);
  };

  const handleStarsHover = starKey => {
    setHoveredStars(starKey);
  };

  const handleStarsLeave = () => {
    setHoveredStars(null);
  };

  const handleStarClick = (idProduct, starKey) => e => {
    e.preventDefault();
    dispatch(addProductRating({ idProduct, starKey }));
  };

  if (componentOnHover) {
    return (
      <div
        className={styles.stars}
        onMouseEnter={handleComponentHover}
        onMouseLeave={handleComponentLeave}
      >
        {[1, 2, 3, 4, 5].map(i => (
          <a
            key={i}
            href='#'
            onClick={handleStarClick(id, i)}
            onMouseEnter={() => handleStarsHover(i)}
            onMouseLeave={handleStarsLeave}
          >
            {i <= hoveredStars ? (
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

  if (myRating !== 0) {
    return (
      <div
        className={styles.stars}
        onMouseEnter={handleComponentHover}
        onMouseLeave={handleComponentLeave}
      >
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#' onClick={handleStarClick(id, i)}>
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
      <div
        className={styles.stars}
        onMouseEnter={handleComponentHover}
        onMouseLeave={handleComponentLeave}
      >
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#' onClick={handleStarClick(id, i)}>
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
