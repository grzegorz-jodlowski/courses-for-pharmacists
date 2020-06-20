import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PageNav.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { NavButton } from '../../common/NavButton/NavButton';

import { connect } from 'react-redux';

class Component extends React.Component {
  state = {
    isOpen: null,
  }

  handleMenuClick = ({ target }) => {
  }

  render() {
    const { handleMenuClick } = this;
    const { isOpen } = this.state;

    return (
      <nav className={clsx(this.className, styles.root)}>
        <div className={styles.wrapper}>
          <Logo action={handleMenuClick} />
          <div className={isOpen === null ? clsx(styles.buttons) : isOpen ? clsx(styles.buttons, styles.left) : clsx(styles.buttons, styles.right)}>
            <NavButton action={handleMenuClick} text={'Moje kursy'} path={'courses'} />
            <NavButton action={handleMenuClick} text={'Koszyk'} path={'cart'} cartVariant />
            <NavButton action={handleMenuClick} text={'Kontakt'} path={'contact'} />
            <NavButton action={handleMenuClick} text={'Zaloguj'} path={'login'} />
          </div>
          <button onClick={handleMenuClick} className={styles.hamburger}>
            <i className={clsx(styles.fadeIn, isOpen ? 'fas fa-times' : 'fas fa-bars')}></i>
          </button>
        </div>
      </nav>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,

};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

