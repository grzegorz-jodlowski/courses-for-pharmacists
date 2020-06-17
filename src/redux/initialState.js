export const initialState = {
  cart: [],
  order: {
    lastOrder: '',
    status: '',
    contact: {
      name: '',
      email: '',
      privacy: null,
      terms: null,
    },
    products: [],
    loading: {
      active: false,
      error: false,
      success: false,
    },
  },
  user: {},
  isLogged: false,
  searchString: '',
  courses: {
    currentCourse: {},
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
