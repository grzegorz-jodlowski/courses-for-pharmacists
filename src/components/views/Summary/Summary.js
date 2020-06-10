import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Summary.module.scss';

import { Title } from '../../common/Title/Title';
import { Price } from '../../common/Price/Price';
import { Button } from '../../common/Button/Button';
import { SummaryItem } from '../../features/SummaryItem/SummaryItem';

import { connect } from 'react-redux';
import { addProducts } from '../../../redux/orderRedux';

class Component extends React.Component {

  componentDidMount() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }


  render() {
    const { className, children, products } = this.props;

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
            {products.map(product => <SummaryItem key={product.courseId} summaryItem={product} />)}
            <Price price={orderValue} text={'Do zapłaty: '} />
          </div>
          :
          <Title>Brak pozycji zamówienia</Title>
        }
        {/* <Button action={this.handleOrder.bind(this)} text={'Złóż zamówienie'} path={'summary'} /> */}
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
  // Component as Summary,
  Container as Summary,
  Component as SummaryComponent, //for tests
};

