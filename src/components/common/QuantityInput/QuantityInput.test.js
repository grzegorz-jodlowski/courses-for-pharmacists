import React from 'react';
import { shallow } from 'enzyme';
import { QuantityInputComponent } from './QuantityInput';

describe('Component QuantityInput', () => {
  it('Should render without crashing', () => {
    const component = shallow(< QuantityInputComponent />);
  expect(component).toBeTruthy();
});
});
