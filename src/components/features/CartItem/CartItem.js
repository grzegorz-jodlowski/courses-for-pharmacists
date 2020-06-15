import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartItem.module.scss';

import { Price } from '../../common/Price/Price';
import { QuantityInput } from '../../common/QuantityInput/QuantityInput';
import { RemoveButton } from '../../common/RemoveButton/RemoveButton';

import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';

class Component extends React.Component {

  handleChange = ({ target }, id) => {
    const { value, name } = target;
    const { updateCartItemQuantity, updateCartItemInfo } = this.props;

    name === 'quantity' && updateCartItemQuantity({ id, [name]: value });
    name === 'additionalInfo' && updateCartItemInfo({ id, [name]: value });
  }

  handleRemove = (id) => {
    const { removeFromCart } = this.props;

    removeFromCart(id);
  }

  render() {
    const { handleChange, handleRemove } = this;

    const { className, cartItem } = this.props;
    const { quantity, courseId, title, price, additionalInfo } = cartItem;

    return (
      <form key={courseId} className={clsx(className, styles.root)}>
        <p className={styles.title}>{title}</p>
        <textarea name="additionalInfo" id={`additionalInfo${courseId}`} className={styles.additionalInfo} onChange={(e) => handleChange(e, courseId)} placeholder="Miejsce na dodatkowe informacje..." value={additionalInfo}></textarea>
        <QuantityInput value={Number(quantity)} action={(e) => handleChange(e, courseId)} className={styles.inputQuantityPosition} id={courseId} />
        <RemoveButton action={() => handleRemove(courseId)} className={styles.removeButton} />
        <Price price={price * quantity} text={''} />
      </form>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  cartItem: PropTypes.object,
  removeFromCart: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateCartItemInfo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartItem,
  Component as CartItemComponent, //for tests
};

