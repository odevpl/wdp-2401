import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';

const StickyBar = ({ id, name, image }) => {
  return (
    <div className={styles.stickyBar}>
      <img
        alt={name}
        src={process.env.PUBLIC_URL + `/images/furnitures/${image}.webp`}
      />
    </div>
  );
};

StickyBar.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default StickyBar;
