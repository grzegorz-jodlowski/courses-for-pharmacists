import React from 'react';
import { shallow } from 'enzyme';
import { CoursesCardsComponent } from './CoursesCards';

describe('Component CoursesCards', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CoursesCardsComponent />);
  expect(component).toBeTruthy();
});
});
