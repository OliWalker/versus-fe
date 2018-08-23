import React from 'react';
import { shallow } from 'enzyme';
import LeagueCard from './LeagueCard';

test('Should render data from props', () => {
  const component = shallow(
    <LeagueCard
      key={1}
      i={1}
      user={{ username: 'Oli', user_id: 3, current_elo: 5 }}
      league={5}
      mainUser={{ user_id: 3 }}
    />
  );
  expect(component.find('Link').props().to).toBe('/match/5/3');
  expect(component.find('h2.LeagueCard__name').text()).toBe(' Oli ');
  expect(component.find('span.LeagueCard__score').text()).toBe(' 5 ');
  expect(component.find('p').text()).toBe('2');

  component.setProps({
    i: 2,
    user: { user_id: 4, username: 'Henry', current_elo: 7 }
  });

  expect(component.find('Link').props().to).toBe('/match/5/4');
  expect(component.find('h2.LeagueCard__name').text()).toBe(' Henry ');
  expect(component.find('span.LeagueCard__score').text()).toBe(' 7 ');
  expect(component.find('p').text()).toBe('3');
});
