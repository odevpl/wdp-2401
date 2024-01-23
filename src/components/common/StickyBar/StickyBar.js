import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';
import Button from '../Button/Button';

const StickyBar = ({ comparedProducts }) => {
  return (
    <div className={styles.stickyBar}>
      {comparedProducts.map(item => (
        <img
          key={item.id}
          alt={item.name}
          src={process.env.PUBLIC_URL + `/images/furnitures/${item.image}.webp`}
        />
      ))}
      <Button variant='small'>Compare</Button>
    </div>
  );
};

StickyBar.propTypes = {
  comparedProducts: PropTypes.array,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default StickyBar;
