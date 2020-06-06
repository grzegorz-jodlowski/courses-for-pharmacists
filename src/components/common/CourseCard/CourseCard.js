import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CourseCard.module.scss';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <Link to={`${process.env.PUBLIC_URL}/`} className={clsx(className, styles.root)}>
    <img src="img/bandage.jpg" alt="" className={styles.image} />
    <div className={styles.description}>
      <h2 className={styles.title}>Kurs VIDEO: Opatrunki specjalistyczne w aptece</h2>
      <p className={styles.price}>299.00 PLN</p>
      <button className={styles.button}>Dowiedz się więcej</button>
    </div>
  </Link>
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
  Component as CourseCard,
  // Container as CourseCard,
  Component as CourseCardComponent, //for tests
};

