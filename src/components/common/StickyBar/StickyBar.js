import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StickyBar = ({ comparedProducts }) => {
  return (
    <div className={styles.stickyBar}>
      {comparedProducts.map(item => (
        <div key={item.id} className={styles.box}>
          <Button className={styles.close}>
            <FontAwesomeIcon icon={faTimes} title='Close' />
          </Button>
          <img
            alt={item.name}
            src={process.env.PUBLIC_URL + `/images/furnitures/${item.image}.webp`}
          />
        </div>
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
