import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import styles from './CoursePage.module.scss';

import { Spinner } from '../../common/Spinner/Spinner';
import { Button } from '../../common/Button/Button';
import { Info } from '../../common/Info/Info';
import { Course } from '../../features/Course/Course';

import { connect } from 'react-redux';
import { fetchCourseDetails, getCurrentCourse } from '../../../redux/coursesRedux';
import { addToCart } from '../../../redux/cartRedux';
import { QuantityInput } from '../../common/QuantityInput/QuantityInput';

class Component extends React.Component {
  state = {
    quantity: 1,
  };

  componentDidMount() {
    const { fetchCourseDetails, match } = this.props;

    fetchCourseDetails(match.params._id);
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    if (value >= 1) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e, courseId, title, price) => {
    const { addToCart } = this.props;
    const { quantity } = this.state;

    const cartItem = {
      quantity,
      courseId,
      title,
      price,
      additionalInfo: '',
    };

    addToCart(cartItem);

    this.setState({ quantity: 1 });
    e.preventDefault();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { className, course, cart, user, isLogged, loading, loadingError } = this.props;
    const { quantity } = this.state;
    const { title, price, _id } = course;


    if (loading || loadingError) {
      return <Spinner />;
    } else {

      const isCourseInCart = cart.some(({ courseId }) => courseId === _id);
      const isCourseAlreadyBought = user.courses.some(course => course === _id);

      return (
        <main className={clsx(className, styles.root, 'container')}>
          <Course course={course} />

          {isCourseAlreadyBought && isLogged ?
            <Button text={'Przejdź do panelu kursu'} path={`panel/${_id}`} />
            :
            isCourseInCart ?
              <div className={styles.toCart} >
                <Info variant={'success'}>Kurs jest w koszyku</Info>
                <Button text={'Przejdź do koszyka'} path={'cart'} />
              </div>
              :
              <form className={styles.addCartForm} onSubmit={(e) => handleSubmit(e, _id, title, price)}>
                <QuantityInput value={quantity} action={handleChange} text={'Ilość: '} />
                <Button submitForm={true} text={'Dodaj do koszyka'} />
              </form>}
        </main>
      );
    }
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
  user: PropTypes.object,
  isLogged: PropTypes.bool,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
};

const mapStateToProps = state => ({
  course: getCurrentCourse(state),
  cart: state.cart,
  user: state.user,
  isLogged: state.isLogged,
  loading: state.courses.loading.active,
  loadingError: state.courses.loading.error,
});

const mapDispatchToProps = dispatch => ({
  fetchCourseDetails: id => dispatch(fetchCourseDetails(id)),
  addToCart: obj => dispatch(addToCart(obj)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CoursePage,
  Container as CoursePage,
  Component as CoursePageComponent, //for tests
};

