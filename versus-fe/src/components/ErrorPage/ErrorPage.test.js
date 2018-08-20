import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';
import toJson from 'enzyme-to-json';

test('ErrorPage should render as expected', () => {
  const component = shallow(<ErrorPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

//run
//npm test -- -u
//to update snapshot!
