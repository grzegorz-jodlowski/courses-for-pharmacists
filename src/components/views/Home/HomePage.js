import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './HomePage.module.scss';

import { Title } from '../../common/Title/Title';

import { connect } from 'react-redux';

const Component = ({ className }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <Title decoration={true} >Login</Title>
  </main>
);

Component.propTypes = {
  className: PropTypes.string,

};

const mapStateToProps = state => ({

});

const Container = connect(mapStateToProps)(Component);

export {
  Container as HomePage,
  Component as HomePageComponent, //for tests
};

