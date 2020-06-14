import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';
import { clearUser } from '../../../redux/userRedux';

class Component extends React.Component {
  state = {
    isOpen: null,
  }

  hamburgerMenuBreakpoint = 768;

  handleMenuClick = ({ target }) => {
    const { href, src } = target;

    if (src) {
      const logoPath = src && src.split('/').pop();
      if (logoPath && window.innerWidth <= this.hamburgerMenuBreakpoint) {
        this.state.isOpen && this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      }
    } else {
      const path = href && href.split('/').pop();
      if (window.innerWidth <= this.hamburgerMenuBreakpoint) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      }
      if (path === 'logout') {
        const { updateLoginStatus, clearUser } = this.props;

        updateLoginStatus(path);
        clearUser();
      }
    }
  }

  render() {
    const { handleMenuClick } = this;
    const { isOpen } = this.state;
    const { isLogged } = this.props;

    return (
      <nav className={clsx(this.className, styles.root)} >
        <div className={styles.wrapper}>
          <Logo action={handleMenuClick} />
          <div className={isOpen === null ? clsx(styles.buttons) : isOpen ? clsx(styles.buttons, styles.left) : clsx(styles.buttons, styles.right)}>
            <NavButton action={handleMenuClick} text={'Moje kursy'} path={'courses'} />
            <NavButton action={handleMenuClick} text={'Koszyk'} path={'cart'} cartVariant />
            <NavButton action={handleMenuClick} text={'Kontakt'} path={'contact'} />
            {isLogged
              ?
              <NavButton action={handleMenuClick} text={'Wyloguj'} path={'logout'} />
              :
              <NavButton action={handleMenuClick} text={'Zaloguj'} path={'login'} />}
          </div>
          <button onClick={handleMenuClick} className={styles.hamburger}>
            {isOpen && <i className={clsx(styles.fadeIn, 'fas fa-times')}></i>}
            {!isOpen && <i className={clsx(styles.fadeIn, 'fas fa-bars')}></i>}
          </button>
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
  clearUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  clearUser: () => dispatch(clearUser()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

