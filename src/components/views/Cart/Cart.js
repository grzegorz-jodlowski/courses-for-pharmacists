import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Cart.module.scss';

import { Link } from 'react-router-dom';

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
    const { className, children, cart } = this.props;

    let cartValue = 0;

    cart.forEach(({ quantity, price }) => {
      cartValue += (quantity * price);
    });

    return (<main className={clsx(className, styles.root, 'container')} >
      <h2 className={styles.title}>Zamówienie</h2>

      {cart.length > 0
        ?
        <div>
          {cart.map(({ quantity, courseId, title, price }) =>
            <form key={courseId} className={styles.cartItem}>
              <p className={styles.cartItemTitle}>{title}</p>
              <input name="quantity" id="quantity" required className={styles.inputQuantity} type="number" value={quantity} onChange={(e) => this.handleQuantityChange(courseId, e)} />
              <textarea name="additionalInfo" id="additionalInfo" className={styles.additionalInfo} onChange={(e) => this.handleInfoChange(courseId, e)} placeholder="Miejsce na dodatkowe informacje..."></textarea>
              <button className={styles.removeButton} onClick={(e) => this.handleRemove(courseId, e)}></button>
            </form>
          )}
          <p className={styles.cartValue}>{`Do zapłaty: ${cartValue},00 PLN`}</p>
          <button className={styles.summaryButton}><Link to={`${process.env.PUBLIC_URL}/summary`} > Podsumuj zamówienie</Link></button>
        </div>
        :
        <h2 className={styles.info}>Koszyk jest pusty</h2>
      }
    </main>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateCartItemInfo: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent, //for tests
};

