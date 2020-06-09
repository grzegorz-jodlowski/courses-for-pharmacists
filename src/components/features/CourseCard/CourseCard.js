import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CourseCard.module.scss';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, course }) => {
  const { _id, image, title, price } = course;
  return (
    <Link to={`${process.env.PUBLIC_URL}/course/${_id}`} className={clsx(className, styles.root)}>
      <img src={`img/${image}`} alt={`Miniatura kursu: ${title}`} className={styles.image} />
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{`${price}.00 PLN`}</p>
        <button className={styles.button}>Dowiedz się więcej</button>
      </div>
    </Link>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  course: PropTypes.object,
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

