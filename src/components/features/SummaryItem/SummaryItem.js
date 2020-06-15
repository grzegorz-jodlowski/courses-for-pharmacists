import React from 'react';
import PropTypes from 'prop-types';

import styles from './SummaryItem.module.scss';

const Component = ({ className, summaryItem }) => {
  const { title, quantity, price, additionalInfo } = summaryItem;

  return (
    <div className={className}>
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
  className: PropTypes.string,
  summaryItem: PropTypes.object,
};

export {
  Component as SummaryItem,
  Component as SummaryItemComponent, //for tests
};

