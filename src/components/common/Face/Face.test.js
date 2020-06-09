import React from 'react';
import { shallow } from 'enzyme';
import { FaceComponent } from './Face';

describe('Component Face', () => {
  it('Should render without crashing', () => {
    const component = shallow(< FaceComponent />);
  expect(component).toBeTruthy();
});
});
