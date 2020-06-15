import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Summary.module.scss';

import { Price } from '../../common/Price/Price';
import { SummaryItem } from '../SummaryItem/SummaryItem';

const Component = ({ className, products, orderValue }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(styles.itemsRow, styles.headers)}>
      <div>Nazwa</div>
      <div>Ilość</div>
      <div>Cena</div>
    </div>
    {products.map(product => <SummaryItem key={product.courseId} summaryItem={product} className={styles.itemsRow} />)}
    <Price price={orderValue} text={'Do zapłaty: '} />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  orderValue: PropTypes.number,
};

export {
  Component as Summary,
  Component as SummaryComponent, //for tests
};

