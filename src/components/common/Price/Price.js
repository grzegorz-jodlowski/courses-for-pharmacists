import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Price.module.scss';

const Component = ({ className, price, text }) => (
  <p className={clsx(className, styles.root)}>
    {`${text} ${price},00 PLN`}
  </p>
);

Component.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
};

export {
  Component as Price,
  Component as PriceComponent, //for tests
};

