import React from 'react';
import { shallow } from 'enzyme';
import { NavButtonComponent } from './NavButton';

describe('Component NavButton', () => {
  it('Should render without crashing', () => {
    const component = shallow(< NavButtonComponent />);
  expect(component).toBeTruthy();
});
});
