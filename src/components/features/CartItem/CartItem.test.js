import React from 'react';
import { shallow } from 'enzyme';
import { CartItemComponent } from './CartItem';

describe('Component CartItem', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CartItemComponent />);
  expect(component).toBeTruthy();
});
});
