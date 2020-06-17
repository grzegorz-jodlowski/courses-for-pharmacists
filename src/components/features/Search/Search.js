import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Search.module.scss';

import { connect } from 'react-redux';
import { changeSearchString } from '../../../redux/searchRedux';

class Component extends React.Component {
  state = {
    value: this.props.searchString,
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    this.props.changeSearchString(this.state.value);
    // this.props.history.push(`/search/${this.state.value}`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchString != prevProps.searchString) {
      this.setState({ value: this.props.searchString });
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleOK();
    }
  }


  render() {
    const { className, text } = this.props;
    const { value } = this.state;
    return (

      <div className={clsx(className, styles.root)}>
        <input
          type='text'
          placeholder={text}
          value={value}
          onChange={event => this.handleChange(event)}
          onKeyPress={this.handleKeyPress}
        />
        <div className={styles.buttons}>
          <button onClick={() => this.handleOK()}>ok</button>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  searchString: PropTypes.string,
  text: PropTypes.string,
  changeSearchString: PropTypes.func,
  history: PropTypes.object,
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

