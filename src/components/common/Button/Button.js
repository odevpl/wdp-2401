import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  className: propClassName,
  isFavorite,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  return (
    <Comp
      href='#'
      {...props}
      className={clsx(classes.join(' '), isFavorite && styles.isFavorite)}
    >
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  isFavorite: PropTypes.bool,
};

export default Button;
