export const initialState = {
  cart: [
    {
      quantity: 1,
      courseId: '5edce5720e194e321823d6cf',
      title: 'Kurs VIDEO: Program apteczny – moduł Zakupy',
      price: 199,
      additionalInfo: '',
    },
    {
      quantity: 2,
      courseId: '5edce4fc61ce708dd5a364ba',
      title: 'Kurs VIDEO: Opatrunki specjalistyczne w aptece',
      price: 149,
      additionalInfo: '',
    },
  ],
  order: {
    products: [
      {
        quantity: 1,
        courseId: '5edce5720e194e321823d6cf',
        title: 'Kurs VIDEO: Program apteczny – moduł Zakupy',
        price: 199,
        additionalInfo: '',
      },
      {
        quantity: 2,
        courseId: '5edce4fc61ce708dd5a364ba',
        title: 'Kurs VIDEO: Opatrunki specjalistyczne w aptece',
        price: 149,
        additionalInfo: '',
      },
    ],
  },
  user: {
    id: '1',
    courses: ['5edce4fc61ce708dd5a364ba', '5edce9b0677f8af3ddc60406'],
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
