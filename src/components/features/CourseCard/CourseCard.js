import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CourseCard.module.scss';

import { Link } from 'react-router-dom';

const Component = ({ className, course: { _id, image, title, price } }) =>
  <Link to={`${process.env.PUBLIC_URL}/course/${_id}`} className={clsx(className, styles.root)}>
    <img src={`img/${image}`} alt={`Miniatura kursu: ${title}`} className={styles.image} />
    <div className={styles.description}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{`${price}.00 PLN`}</p>
      <button className={styles.button}>Dowiedz się więcej</button>
    </div>
  </Link>;

Component.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object,
};

export {
  Component as CourseCard,
  Component as CourseCardComponent, //for tests
};

