import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartItem.module.scss';

import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';

class Component extends React.Component {

  handleQuantityChange(id, e) {
    this.props.updateCartItemQuantity({ id, quantity: e.target.value });
  }

  handleInfoChange(id, e) {
    this.props.updateCartItemInfo({ id, additionalInfo: e.target.value });
  }

  handleRemove(id, e) {
    e.preventDefault();
    this.props.removeFromCart(id);
  }


  render() {
    const { className, cartItem } = this.props;
    const { quantity, courseId, title, price } = cartItem;

    return (
      <form key={courseId} className={clsx(className, styles.root)}>
        <p className={styles.title}>{title}</p>
        <input name="quantity" id="quantity" required className={styles.inputQuantity} type="number" value={quantity} onChange={(e) => this.handleQuantityChange(courseId, e)} />
        <textarea name="additionalInfo" id="additionalInfo" className={styles.additionalInfo} onChange={(e) => this.handleInfoChange(courseId, e)} placeholder="Miejsce na dodatkowe informacje..."></textarea>
        <button className={styles.removeButton} onClick={(e) => this.handleRemove(courseId, e)}></button>
      </form>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartItem: PropTypes.object,
  removeFromCart: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateCartItemInfo: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent, //for tests
};

