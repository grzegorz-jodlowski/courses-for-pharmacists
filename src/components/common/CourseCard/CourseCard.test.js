import React from 'react';
import { shallow } from 'enzyme';
import { CourseCardComponent } from './CourseCard';

describe('Component CourseCard', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CourseCardComponent />);
  expect(component).toBeTruthy();
});
});
