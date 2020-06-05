import React from 'react';
import { shallow } from 'enzyme';
import { MyCoursesComponent } from './MyCourses';

describe('Component MyCourses', () => {
  it('Should render without crashing', () => {
    const component = shallow(< MyCoursesComponent />);
  expect(component).toBeTruthy();
});
});
