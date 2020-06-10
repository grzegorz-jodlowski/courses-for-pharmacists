import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Summary.module.scss';

import { Price } from '../../common/Price/Price';
import { SummaryItem } from '../SummaryItem/SummaryItem';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, products, orderValue }) => (
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
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  orderValue: PropTypes.number,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Summary,
  // Container as Summary,
  Component as SummaryComponent, //for tests
};

