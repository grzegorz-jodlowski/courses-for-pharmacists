import React from 'react';
import { shallow } from 'enzyme';
import { NewsletterComponent } from './Newsletter';

describe('Component Newsletter', () => {
  it('Should render without crashing', () => {
    const component = shallow(< NewsletterComponent />);
  expect(component).toBeTruthy();
});
});
