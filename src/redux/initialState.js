export const initialState = {
  cart: [
    {
      quantity: 1,
      courseId: '5edce5720e194e321823d6cf',
      title: 'Kurs VIDEO: Program apteczny – moduł Zakupy',
      price: 199,
    },
    {
      quantity: 2,
      courseId: '5edce4fc61ce708dd5a364ba',
      title: 'Kurs VIDEO: Opatrunki specjalistyczne w aptece',
      price: 149,
    },
  ],
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
