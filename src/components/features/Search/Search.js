import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Search.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {

  render() {
    const { className } = this.props;
    return (

      <div className={clsx(className, styles.root)}>
        <Title decoration={false}>Search</Title>
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
  Component as Search,
  // Container as Search,
  Component as SearchComponent, //for tests
};

