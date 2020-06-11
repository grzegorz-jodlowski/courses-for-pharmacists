import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartPage.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Price } from '../../common/Price/Price';
import { CartItem } from '../../features/CartItem/CartItem';

import { connect } from 'react-redux';
// import { addProducts } from '../../../redux/orderRedux';

const Component = ({ className, cart }) => {

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
          <Price price={cartValue} text={'Suma: '} />
          <Button text={'Do podsumowania'} path={'summary'} />
        </div>
        :
        <Title>Koszyk jest pusty</Title>
      }
    </main>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartPage,
  Container as CartPage,
  Component as CartPageComponent, //for tests
};

