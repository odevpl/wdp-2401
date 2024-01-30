import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import Promotion from '../../features/Promotion/Promotion';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Sale from '../../features/Sale/Sale';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
