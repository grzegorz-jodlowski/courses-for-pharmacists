import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

class Component extends React.Component {
  state = {
    isOpen: false,
  }

  hamburgerMenuBreakpoint = 768;

  handleMenuClick(e) {
    const path = e.target.href && e.target.href.split('/').pop();
    if (window.innerWidth <= this.hamburgerMenuBreakpoint) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
    if (path === 'logout') {
      this.props.updateLoginStatus(path);
    }
  }

  handleLogoClick(e) {
    const logoPath = e.target.src && e.target.src.split('/').pop();
    if (logoPath && window.innerWidth <= this.hamburgerMenuBreakpoint) {
      this.state.isOpen && this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  render() {
    const { isOpen } = this.state;
    const { isLogged } = this.props;

    return (
      <nav className={clsx(this.className, styles.root)} >
        <div className={styles.wrapper}>
          <Logo action={this.handleLogoClick.bind(this)} />
          <div className={isOpen ? clsx(styles.buttons, styles.menuOpen) : clsx(styles.buttons)}>
            <NavButton action={this.handleMenuClick.bind(this)} text={'Moje kursy'} path={'courses'} />
            <NavButton action={this.handleMenuClick.bind(this)} text={'Koszyk'} path={'cart'} />
            <NavButton action={this.handleMenuClick.bind(this)} text={'Kontakt'} path={'contact'} />
            {isLogged
              ?
              <NavButton action={this.handleMenuClick.bind(this)} text={'Wyloguj'} path={'logout'} />
              :
              <NavButton action={this.handleMenuClick.bind(this)} text={'Zaloguj'} path={'login'} />}
          </div>
          <button onClick={this.handleMenuClick.bind(this)} className={styles.hamburger}>&#9776;</button>
        </div>
      </nav>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  updateLoginStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

