import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Course.module.scss';

import { Link } from 'react-router-dom';

import { lengthToHoursMinutes } from '../../../utils/lengthToHoursMinutes';

import { connect } from 'react-redux';
import { fetchCourseDetails, getCurrentCourse } from '../../../redux/coursesRedux';
import { addToCart } from '../../../redux/cartRedux';

class Component extends React.Component {
  state = {
    quantity: 1,
  };

  componentDidMount() {
    const { fetchCourseDetails, match } = this.props;
    fetchCourseDetails(match.params._id);
  }

  handleQuantityChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event, id) {
    const cartItem = {
      quantity: this.state.quantity,
      courseId: id,
    };

    this.props.addToCart(cartItem);

    this.setState({ quantity: 1 });
    event.preventDefault();
  }

  render() {
    const { className, children, course, cart } = this.props;
    const { title, image, price, _id, chapters, length, gallery, description } = course;

    const isCourseInCart = cart.some(({ courseId }) => courseId === _id);

    return (
      <main className={'container'}>
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
          {isCourseInCart
            ?
            <div className={styles.toCart} >
              <div className={styles.toCartInfo}>Kurs jest w koszyku</div>
              <button className={styles.toCartButton}><Link to={`${process.env.PUBLIC_URL}/cart`} > Przejdź do koszyka</Link></button>
            </div>
            :
            <form className={styles.addCartForm} onSubmit={(e) => this.handleSubmit(e, _id)}>
              <label htmlFor="quantity">Ilość: <span></span></label>
              <input name="quantity" id="quantity" required className={styles.inputQuantity} type="number" value={this.state.quantity} onChange={this.handleQuantityChange.bind(this)} />
              <input className={styles.submitButton} type="submit" value="Dodaj do koszyka" />
            </form>
          }
        </section>
      </main>
    );
  }

}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  match: PropTypes.object,
  course: PropTypes.object,
  fetchCourseDetails: PropTypes.func,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  course: getCurrentCourse(state),
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  fetchCourseDetails: id => dispatch(fetchCourseDetails(id)),
  addToCart: obj => dispatch(addToCart(obj)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Course,
  Container as Course,
  Component as CourseComponent, //for tests
};

