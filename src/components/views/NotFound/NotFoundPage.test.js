import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundComponent } from './NotFound';

describe('Component NotFound', () => {
  it('Should render without crashing', () => {
    const component = shallow(< NotFoundComponent />);
    expect(component).toBeTruthy();
  });
});
