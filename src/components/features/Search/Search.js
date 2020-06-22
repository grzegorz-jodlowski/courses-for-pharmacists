import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Search.module.scss';

import { connect } from 'react-redux';
import { changeSearchString } from '../../../redux/searchRedux';
import { filterCourses } from '../../../redux/coursesRedux';

class Component extends React.Component {

  handleChange = (event) => {
    const { changeSearchString, filterCourses } = this.props;

    changeSearchString(event.target.value);
    filterCourses(event.target.value);
  }

  render() {
    const { handleChange } = this;
    const { className, searchString } = this.props;
    return (
      <div className={clsx(className, styles.root)} id='search'>
        <input
          type='text'
          placeholder='Szukaj...'
          value={searchString}
          onChange={handleChange}
        />
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
  filterCourses: PropTypes.func,
};

const mapStateToProps = state => ({
  searchString: state.searchString,
});

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString => dispatch(changeSearchString(newSearchString)),
  filterCourses: newSearchString => dispatch(filterCourses(newSearchString)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Search,
  Component as SearchComponent, //for tests
};

