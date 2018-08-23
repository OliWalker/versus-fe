import React from 'react';
import { shallow } from 'enzyme';
import ProfileSportScore from './ProfileSportScore';

test('Should render all them props', () => {
  const component = shallow(
    <ProfileSportScore
      sport={{ data: { current_elo: 5 }, sport_name: 'Tennis' }}
    />
  );

  expect(component.find('i').text()).toBe('5');
  expect(component.find('.ProfilePage__sport__name__single').text()).toBe(
    'Tennis'
  );

  component.setProps({
    sport: { data: { current_elo: 3 }, sport_name: 'PingPong' }
  });

  expect(component.find('i').text()).toBe('3');
  expect(component.find('.ProfilePage__sport__name__single').text()).toBe(
    'PingPong'
  );
});
