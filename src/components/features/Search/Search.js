import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Search.module.scss';

import { connect } from 'react-redux';
import { changeSearchString } from '../../../redux/searchRedux';

class Component extends React.Component {

  handleChange = (event) => {
    this.props.changeSearchString(event.target.value);
  }

  render() {
    const { handleChange } = this;
    const { className, searchString } = this.props;
    return (

      <div className={clsx(className, styles.root)}>
        <input
          type='text'
          placeholder='Szukaj...'
          value={searchString}
          onChange={event => handleChange(event)}
        />
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
};

const mapStateToProps = state => ({
  searchString: state.searchString,
});

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString => dispatch(changeSearchString(newSearchString)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Search,
  Component as SearchComponent, //for tests
};

