import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';
import { Summary } from '../../features/Summary/Summary';

import { connect } from 'react-redux';
import { addProducts } from '../../../redux/orderRedux';

class Component extends React.Component {

  state = {
    name: '',
    email: '',
    privacy: false,
    terms: false,
  };

  componentDidMount() {
    const { addProducts, cart } = this.props;

    addProducts(cart);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);

  }
  handlePrivacyChange(event) {
    this.setState({ privacy: !this.state.privacy });
    console.log(this.state.privacy);

  }
  handleTermsChange(event) {
    this.setState({ terms: !this.state.value });
    console.log(this.state.terms);

  }

  handleOrder() {

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
            <form>
              <label htmlFor="name">Imię <span>*</span></label>
              <input name="name" id="name" required className={styles.inputName} type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
              <label htmlFor="email">Email <span>*</span></label>
              <input name="email" id="email" required className={styles.inputEmail} type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
              <label htmlFor="privacy">Privacy<span>*</span></label>
              <input name="privacy" id="privacy" required className={styles.inputEmail} type="checkbox" value={this.state.privacy} onChange={this.handlePrivacyChange.bind(this)} />
              <label htmlFor="terms">Terms<span>*</span></label>
              <input name="terms" id="terms" required className={styles.inputEmail} type="checkbox" value={this.state.terms} onChange={this.handleTermsChange.bind(this)} />
              <Button action={this.handleOrder.bind(this)} text={'Zamawiam i płacę'} path={'summary'} />
            </form>
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

