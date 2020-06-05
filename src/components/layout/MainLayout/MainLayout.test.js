import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from './MainLayout';

describe('Component MainLayout', () => {
  it('Should render without crashing', () => {
    const component = shallow(<MainLayoutComponent />);
    expect(component).toBeTruthy();
  });
});
