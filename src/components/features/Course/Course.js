import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import styles from './Course.module.scss';

import { lengthToHoursMinutes } from '../../../utils/lengthToHoursMinutes';

const Component = ({ className, course: { title, image, price, chapters, length, gallery, description } }) =>
  <section className={className}>
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
        {gallery && gallery.map((item, index) => (
          <div key={index}>
            <img src={`/img/${item}`} alt={`Zdjęcie ${index + 1} w galerii kursu ${title}`} />
          </div>
        ))}
      </Carousel>
    </article>
  </section>;

Component.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object,
};

export {
  Component as Course,
  Component as CourseComponent, //for tests
};

