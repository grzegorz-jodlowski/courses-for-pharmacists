import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {
  state = {
    menu: null,
  }

  handleMenuClick() {
    if (this.state.menu === null) {
      this.setState({
        menu: {
          display: 'block',
          position: 'absolute',
          top: '8rem',
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          textAlign: 'center',
        },
      });
    } else {
      this.setState({ menu: null });
    }
  }

  render() {
    return (
      <nav className={clsx(this.className, styles.root)
      } >
        <div className={styles.wrapper}>
          <Logo />
          <div style={this.state.menu} className={clsx(styles.buttons)}>
            <NavButton text={'Moje kursy'} path={'courses'} />
            <NavButton text={'Koszyk'} path={'cart'} />
            <NavButton text={'Kontakt'} path={'contact'} />
            <NavButton text={'Wyloguj'} path={'login'} />
          </div>
          <button onClick={() => this.handleMenuClick()} className={styles.hamburger}>&#9776;</button>
        </div>
      </nav>
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
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent, //for tests
};

