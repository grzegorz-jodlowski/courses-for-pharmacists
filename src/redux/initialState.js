export const initialState = {
  cart: [],
  order: [],
  user: {
    id: '1',
    courses: ['5edce4fc61ce708dd5a364ba'],
  },
  isLogged: true,
  courses: {
    currentCourse: {},
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
