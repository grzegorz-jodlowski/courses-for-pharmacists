import React from 'react';
import { shallow } from 'enzyme';
import { SearchComponent } from './Search';

describe('Component Search', () => {
  it('Should render without crashing', () => {
    const component = shallow(< SearchComponent />);
    expect(component).toBeTruthy();
  });
});
