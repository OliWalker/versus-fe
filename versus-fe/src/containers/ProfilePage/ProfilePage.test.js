import React from 'react';
import { shallow } from 'enzyme';
import ProfilePage from './ProfilePage';
import { toJson } from 'enzyme-to-json';

test('Profile page should render as expected', () => {
  const component = shallow(<ProfilePage />);
  const tree = toJson(component);
  console.log(tree);
});
