import React from 'react';
import { shallow } from 'enzyme';
import { TitleComponent } from './Title';

describe('Component Title', () => {
  it('Should render without crashing', () => {
    const component = shallow(< TitleComponent />);
  expect(component).toBeTruthy();
});
});
