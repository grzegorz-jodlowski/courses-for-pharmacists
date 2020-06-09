import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Carousel } from 'react-responsive-carousel';

import styles from './Course.module.scss';

import { lengthToHoursMinutes } from '../../../utils/lengthToHoursMinutes';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, course }) => {
  const { title, image, price, chapters, length, gallery, description } = course;

  return (
    <section className={clsx(className, styles.root)}>
      <img src={`/img/${image}`} alt={`Miniatura kursu: ${title}`} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{`Cena: ${price}.00 PLN`}</p>
        <p className={styles.chapters}>{`Ilość rozdziałów: ${chapters}`}</p>
        <p className={styles.length}>{`Długość kursu: ${lengthToHoursMinutes(length)}`}</p>
      </div>
      <article className={styles.gallery}>
        <Carousel>
          {gallery && gallery.map((item, i) => (
            <div key={i}>
              <img src={`/img/${item}`} alt={`Zdjęcie ${i + 1} w galerii kursu ${title}`} />
            </div>
          ))}
        </Carousel>
      </article>
    </section>
  );
}

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
  Component as Course,
  // Container as Course,
  Component as CourseComponent, //for tests
};

