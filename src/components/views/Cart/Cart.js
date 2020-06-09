import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Cart.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Price } from '../../common/Price/Price';
import { CartItem } from '../../features/CartItem/CartItem';

import { connect } from 'react-redux';
import { addProducts } from '../../../redux/orderRedux';

class Component extends React.Component {

  handleSummary() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  render() {
    const { className, cart } = this.props;

    let cartValue = 0;

    cart.forEach(({ quantity, price }) => {
      cartValue += (quantity * price);
    });

    return (
      <main className={clsx(className, styles.root, 'container')} >
        <Title decoration={true} >Koszyk</Title>

        {cart.length > 0
          ?
          <div>
            {cart.map(cartItem =>
              <CartItem key={cartItem.courseId} cartItem={cartItem} />
            )}
            <Price price={cartValue} text={'Do zapłaty: '} />
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
  addProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addProducts: cart => dispatch(addProducts(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent, //for tests
};

