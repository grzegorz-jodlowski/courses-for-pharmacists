import React from 'react';
import { shallow } from 'enzyme';
import { CourseComponent } from './Course';

describe('Component Course', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CourseComponent />);
    expect(component).toBeTruthy();
  });
});
