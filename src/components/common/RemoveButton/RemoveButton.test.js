import React from 'react';
import { shallow } from 'enzyme';
import { RemoveButtonComponent } from './RemoveButton';

describe('Component RemoveButton', () => {
  it('Should render without crashing', () => {
    const component = shallow(< RemoveButtonComponent />);
  expect(component).toBeTruthy();
});
});
