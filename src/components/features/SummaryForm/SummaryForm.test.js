import React from 'react';
import { shallow } from 'enzyme';
import { SummaryFormComponent } from './SummaryForm';

describe('Component SummaryForm', () => {
  it('Should render without crashing', () => {
    const component = shallow(< SummaryFormComponent />);
  expect(component).toBeTruthy();
});
});
