import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryForm.module.scss';

import { Button } from '../../common/Button/Button';
import { Spinner } from '../../common/Spinner/Spinner';
import { Info } from '../../common/Info/Info';
import { Modal } from '../../common/Modal/Modal';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { postOrder, clearSuccess } from '../../../redux/orderRedux';

class Component extends React.Component {
  state = {
    contact: {
      name: '',
      email: '',
      privacy: false,
      terms: false,
    },
    error: null,
  };

  handleChange = ({ target }) => {
    const { contact } = this.state;
    const { value, name, type } = target;

    if (type !== 'checkbox') {
      this.setState({ contact: { ...contact, [name]: value } });
    } else {
      this.setState({ contact: { ...contact, [name]: !contact[name] } });
    }
    this.setState({ error: null });
  }

  handleSubmit = (e) => {
    const { contact } = this.state;
    const { products, orderValue, success, postOrder } = this.props;

    e.preventDefault();

    let error = null;

    const emailPattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'g');

    if (!contact.name.length || !contact.email.length) error = `Uzupełnij imię i email`;
    else if (!contact.privacy || !contact.terms) error = `Musisz zaakceptować zgody`;
    else if (contact.name.length > 50 || contact.name.length < 2) error = `Imię może zawierać 2-50 znaków`;
    else if (!emailPattern.test(contact.email)) error = `Nieprawidłowy adres email`;

    if (!error) {
      const order = {
        status: 'ordered',
        value: orderValue,
        products,
        contact,
      };

      postOrder(order);

      if (success) {
        this.setState({
          contact: {
            name: '',
            email: '',
            privacy: false,
            terms: false,
          },
          error: null,
        });
      }
    }
    else this.setState({ error });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { className, loading, loadingError, success, products, lastOrder, clearSuccess } = this.props;
    const { error, contact: { name, email, privacy, terms } } = this.state;

    return (
      <form className={clsx(className, styles.root)} onSubmit={(e) => handleSubmit(e)}>
        {(!loading && !loadingError && success) && <Modal variant='success' text={`Zamówienie o numerze ${lastOrder} zostało złożone`} close={clearSuccess} />}
        {(loadingError) && <Info variant='error'>Ups... coś poszło nie tak!</Info>}
        {(error) && <Info variant='warning'>{error}</Info>}
        {(loading) && <Spinner />}
        {(!loading && products.length > 0) &&
          (<div className={styles.wrapper}>
            <label htmlFor="name">Imię <span>*</span></label>
            <input
              name="name"
              id="name"
              required
              className={styles.inputName}
              type="text"
              value={name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email <span>*</span></label>
            <input
              name="email"
              id="email"
              required
              className={styles.inputEmail}
              type="text"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="privacy" className={styles.labelPrivacy}>
              <input
                name="privacy"
                id="privacy"
                required
                className={styles.inputPrivacy}
                type="checkbox"
                checked={privacy}
                value={privacy}
                onChange={handleChange}
              />
              <p>
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celach i zakresie zgodnym z <Link to={`${process.env.PUBLIC_URL}/privacy`} className={styles.link}>Polityką prywatności</Link><span>*</span>
              </p>
            </label>
            <label htmlFor="terms" className={styles.labelTerms}>
              <input
                name="terms"
                id="terms"
                required
                className={styles.inputTerms}
                type="checkbox"
                checked={terms}
                value={terms}
                onChange={handleChange}
              />
              <p>
                Akceptuję <Link to={`${process.env.PUBLIC_URL}/terms`} className={styles.link}> regulamin zakupów</Link><span>*</span>
              </p>
            </label>
            <Button submitForm={true} text='Zamawiam i płacę' path='summary' />
          </div>)}
      </form>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  orderValue: PropTypes.number,
  postOrder: PropTypes.func,
  products: PropTypes.array,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
  success: PropTypes.bool,
  lastOrder: PropTypes.string,
  clearSuccess: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.order.products,
  loading: state.order.loading.active,
  loadingError: state.order.loading.error,
  success: state.order.loading.success,
  lastOrder: state.order.lastOrder,
});

const mapDispatchToProps = dispatch => ({
  postOrder: (order) => dispatch(postOrder(order)),
  clearSuccess: () => dispatch(clearSuccess()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as SummaryForm,
  Component as SummaryFormComponent, //for tests
};

