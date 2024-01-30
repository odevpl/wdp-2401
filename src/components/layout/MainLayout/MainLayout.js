import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ViewportWidthListener from '../../features/ViewportWidthListener/ViewportWidthListener';

const MainLayout = ({ children }) => (
  <div>
    <ViewportWidthListener />
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
