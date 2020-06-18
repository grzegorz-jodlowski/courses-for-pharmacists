import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Contact.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    text: '',
    postError: false,
    // validationError: null,
    // loading: false,
    // success: false,
  };
  handleSubmit = (e) => {
    const { name, email } = this.state;
  }
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { handleSubmit, handleChange } = this;

    const { className } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={handleChange} />
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={handleChange} />
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} onChange={handleChange} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent, //for tests
};

