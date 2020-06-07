export const initialState = {
  user: {
    id: '1',
    courses: ['5edce9b0677f8af3ddc60406'],
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
