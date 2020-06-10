import React from 'react';
import { shallow } from 'enzyme';
import { SummaryComponent } from './Summary';

describe('Component Summary', () => {
  it('Should render without crashing', () => {
    const component = shallow(< SummaryComponent />);
  expect(component).toBeTruthy();
});
});
