import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import StickyBar from '../../common/StickyBar/StickyBar';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'bed',
    };

    // Bind the methods to the class instance using arrow functions
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSwipeLeft = this.handleSwipeLeft.bind(this);
    this.handleSwipeRight = this.handleSwipeRight.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  handleSwipeLeft() {
    if (this.state.activePage < this.lastPageIndex) {
      const nextPage = this.state.activePage + 1;
      this.setState({ activePage: nextPage });
    }
  }

  handleSwipeRight() {
    if (this.state.activePage > 0) {
      const previousPage = this.state.activePage - 1;
      this.setState({ activePage: previousPage });
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const comparedProducts = products.filter(item => item.compared === true);
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);
    this.lastPageIndex = pagesCount - 1;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-12 col-md-auto mb-md-0 mb-4 ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-12 col-md ' + styles.menu}>
                <ul className={styles.categories}>
                  {categories.map(item => (
                    <li className={styles.categorie} key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-6 col-md-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            leftAction={this.handleSwipeLeft}
            rightAction={this.handleSwipeRight}
          >
            <div className='row'>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div
                    key={item.id}
                    id={item.id}
                    className='col-lg-3 col-md-4 col-sm-6 col-12'
                  >
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </Swipeable>
          {comparedProducts.length > 0 && (
            <StickyBar comparedProducts={comparedProducts} />
          )}
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
