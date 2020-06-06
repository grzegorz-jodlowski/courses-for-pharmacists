import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <nav className={clsx(className, styles.root)}>
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.buttons}>
        <NavButton text={"Moje kursy"} path={'courses'} />
        <NavButton text={"Koszyk"} path={'cart'} />
        <NavButton text={"Kontakt"} path={'contact'} />
        <NavButton text={"Wyloguj"} path={'login'} />
      </div>
    </div>
  </nav>
);

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
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent, //for tests
};

