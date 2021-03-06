import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Summary } from '../../features/Summary/Summary';
import { SummaryForm } from '../../features/SummaryForm/SummaryForm';

import { connect } from 'react-redux';
import { fetchProductsFromCart } from '../../../redux/orderRedux';

class Component extends React.Component {

  componentDidMount() {
    const { fetchProductsFromCart, cart } = this.props;

    fetchProductsFromCart(cart);
  }

  render() {
    const { className, products } = this.props;

    let orderValue = 0;

    products.forEach(({ quantity, price }) => {
      orderValue += (quantity * price);
    });

    return (
      <div className={clsx(className, styles.root, 'container')}>
        <Title decoration={true}>Zamówienie</Title>
        {products.length
          ?
          <Summary products={products} orderValue={orderValue} />
          :
          <Title>Brak pozycji zamówienia</Title>}
        <SummaryForm orderValue={orderValue} />
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  fetchProductsFromCart: PropTypes.func,
  cart: PropTypes.array,

};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.order.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProductsFromCart: cart => dispatch(fetchProductsFromCart(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as SummaryPage,
  Component as SummaryPageComponent, //for tests
};

