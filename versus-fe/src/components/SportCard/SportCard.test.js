import React from 'react';
import { shallow } from 'enzyme';
import { SportCard } from './SportCard';

test('Should render all props', () => {
  const component = shallow(
    <SportCard sport={{ sport_name: 'Tennis', league_id: 5 }} mine={true} />
  );

  expect(component.find('h2').text()).toBe(' Tennis ');
  expect(component.find('Link').props().to).toBe('/league/5');

  component.setProps({ sport: { sport_name: 'PingPong', league_id: 8 } });

  expect(component.find('h2').text()).toBe(' PingPong ');
  expect(component.find('Link').props().to).toBe('/league/8');
});
