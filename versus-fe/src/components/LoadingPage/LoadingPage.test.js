import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from './LoadingPage';
import toJson from 'enzyme-to-json';

test('LoadingPage should render as expected', () => {
  const component = shallow(<LoadingPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
