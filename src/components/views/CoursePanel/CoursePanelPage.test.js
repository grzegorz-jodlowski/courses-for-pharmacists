import React from 'react';
import { shallow } from 'enzyme';
import { CoursePanelComponent } from './CoursePanel';

describe('Component CoursePanel', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CoursePanelComponent />);
  expect(component).toBeTruthy();
});
});
