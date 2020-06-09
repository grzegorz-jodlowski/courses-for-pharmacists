import React from 'react';
import { shallow } from 'enzyme';
import { SummaryItemComponent } from './SummaryItem';

describe('Component SummaryItem', () => {
  it('Should render without crashing', () => {
    const component = shallow(< SummaryItemComponent />);
  expect(component).toBeTruthy();
});
});
