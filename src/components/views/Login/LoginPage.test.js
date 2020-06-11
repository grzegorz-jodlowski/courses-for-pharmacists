import React from 'react';
import { shallow } from 'enzyme';
import { LoginComponent } from './Login';

describe('Component Login', () => {
  it('Should render without crashing', () => {
    const component = shallow(< LoginComponent />);
    expect(component).toBeTruthy();
  });
});
