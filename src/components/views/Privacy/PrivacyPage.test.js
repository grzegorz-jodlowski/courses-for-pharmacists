import React from 'react';
import { shallow } from 'enzyme';
import { PrivacyComponent } from './Privacy';

describe('Component Privacy', () => {
  it('Should render without crashing', () => {
    const component = shallow(< PrivacyComponent />);
  expect(component).toBeTruthy();
});
});
