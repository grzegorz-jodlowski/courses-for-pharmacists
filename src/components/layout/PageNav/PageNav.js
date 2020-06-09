import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

import { connect } from 'react-redux';
// import { updateLoginStatus } from '../../../redux/loginRedux';

class Component extends React.Component {
  state = {
    isOpen: false,
  }

  handleMenuClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  classes = {
    menu: {
      display: 'block',
      position: 'absolute',
      top: '8rem',
      left: 0,
      width: '100%',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
  }

  render() {
    const { isOpen } = this.state;
    const { isLogged } = this.props;

    return (
      <nav className={clsx(this.className, styles.root)
      } >
        <div className={styles.wrapper}>
          <Logo />
          <div style={isOpen ? this.classes.menu : null} className={clsx(styles.buttons)}>
            <NavButton text={'Moje kursy'} path={'courses'} />
            <NavButton text={'Koszyk'} path={'cart'} />
            <NavButton text={'Kontakt'} path={'contact'} />
            {isLogged
              ?
              <NavButton type={'log'} text={'Wyloguj'} path={'logout'} />
              :
              <NavButton type={'log'} text={'Zaloguj'} path={'login'} />}
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
  isLogged: PropTypes.bool,

};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

