import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Cart.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';

import { connect } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, updateCartItemInfo } from '../../../redux/cartRedux';
import { addProducts } from '../../../redux/orderRedux';
import { Price } from '../../common/Price/Price';

class Component extends React.Component {

  handleSummary() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

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
    const { className, cart } = this.props;

    let cartValue = 0;

    cart.forEach(({ quantity, price }) => {
      cartValue += (quantity * price);
    });

    return (<main className={clsx(className, styles.root, 'container')} >
      <Title decoration={true} >Koszyk</Title>

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
          <Price price={cartValue} />
          <Button action={this.handleSummary.bind(this)} text={'Do podsumowania'} path={'summary'} />
        </div>
        :
        <Title>Koszyk jest pusty</Title>
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
  addProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  updateCartItemQuantity: ({ id, quantity }) => dispatch(updateCartItemQuantity({ id, quantity })),
  updateCartItemInfo: ({ id, additionalInfo }) => dispatch(updateCartItemInfo({ id, additionalInfo })),
  addProducts: cart => dispatch(addProducts(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent, //for tests
};

