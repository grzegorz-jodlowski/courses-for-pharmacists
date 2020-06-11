import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Summary } from '../../features/Summary/Summary';
import { SummaryForm } from '../../features/SummaryForm/SummaryForm';

import { connect } from 'react-redux';
import { addProducts } from '../../../redux/orderRedux';

class Component extends React.Component {

  componentDidMount() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  render() {
    const { className, products } = this.props;

    let orderValue = 0;

    products.forEach(({ quantity, price }) => {
      orderValue += (quantity * price);
    });

    return (
      <div className={clsx(className, styles.root, 'container')}>
        <Title decoration={true} >Zamówienie</Title>

        {products.length > 0
          ?
          <div>
            <Summary products={products} orderValue={orderValue} />
            <SummaryForm />
          </div>
          :
          <Title>Brak pozycji zamówienia</Title>
        }
      </div>

    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  addProducts: PropTypes.func,
  cart: PropTypes.array,

};

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.order.products,
});

const mapDispatchToProps = dispatch => ({
  addProducts: cart => dispatch(addProducts(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SummaryPage,
  Container as SummaryPage,
  Component as SummaryPageComponent, //for tests
};

