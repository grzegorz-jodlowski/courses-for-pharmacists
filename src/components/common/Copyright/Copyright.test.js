import React from 'react';
import { shallow } from 'enzyme';
import { CopyrightComponent } from './Copyright';

describe('Component Copyright', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CopyrightComponent />);
  expect(component).toBeTruthy();
});
});
