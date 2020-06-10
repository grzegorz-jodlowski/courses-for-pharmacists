import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryItem.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, summaryItem }) => {

  const { title, quantity, price, additionalInfo } = summaryItem;
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.title}>
        {title}
        <div className={styles.additionalInfo}>
          {additionalInfo}
        </div>
      </div>
      <div className={styles.quantity}>
        {quantity}
      </div>
      <div className={styles.price}>
        {price}
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  summaryItem: PropTypes.object,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SummaryItem,
  // Container as SummaryItem,
  Component as SummaryItemComponent, //for tests
};

