import React from 'react';
import PropTypes from 'prop-types';

import styles from './QuantityInput.module.scss';

const Component = ({ className, value, action, text, id }) => (
  <label htmlFor={`quantity${id}`} className={className}>
    {text}
    <input name="quantity" id={`quantity${id}`} required className={styles.input} type="number" value={value} onChange={action} />
  </label>
);

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  text: PropTypes.string,
  action: PropTypes.func,
  id: PropTypes.string,
};

export {
  Component as QuantityInput,
  Component as QuantityInputComponent, //for tests
};

