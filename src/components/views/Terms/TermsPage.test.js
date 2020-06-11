import React from 'react';
import { shallow } from 'enzyme';
import { TermsComponent } from './Terms';

describe('Component Terms', () => {
  it('Should render without crashing', () => {
    const component = shallow(< TermsComponent />);
    expect(component).toBeTruthy();
  });
});
