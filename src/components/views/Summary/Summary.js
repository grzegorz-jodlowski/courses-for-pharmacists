import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Summary.module.scss';

import { Title } from '../../common/Title/Title';
import { Price } from '../../common/Price/Price';
import { Button } from '../../common/Button/Button';
import { SummaryItem } from '../../features/SummaryItem/SummaryItem';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {


  render() {
    const { className, children, products } = this.props;

    return (
      <div className={clsx(className, styles.root, 'container')}>
        <Title decoration={true} >Zamówienie</Title>


        {products.length > 0
          ?
          <div>
            {products.map(product => <SummaryItem key={product.courseId} summaryItem={product} />)}
            <Price price={10} text={'Do zapłaty: '} />
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
};

const mapStateToProps = state => ({
  products: state.order.products,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Summary,
  Container as Summary,
  Component as SummaryComponent, //for tests
};

