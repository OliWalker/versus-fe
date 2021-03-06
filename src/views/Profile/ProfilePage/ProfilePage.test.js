import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePage } from './ProfilePage';

const user = {
  first_name: 'Oli',
  last_name: 'Walker',
  total_score: '1000',
  image_path: './image.jpg'
};

const stats = [
  { sport_name: 'Tennis', data: { current_elo: 1000 } },
  { sport_name: 'PingPong', data: { current_elo: 1900 } },
  { sport_name: 'Football', data: { current_elo: 700 } }
];

const component = shallow(<ProfilePage user={user} stats={stats} />);

test('Profile page should render all props', () => {
  expect(component.contains(<img alt="random Dude" src="./image.jpg" />)).toBe(
    true
  );
  expect(component.find('span.ProfilePage__name').text()).toBe('Oli Walker');
  expect(component.find('span.ProfilePage__score').text()).toBe('1000');
});

test('Should loop over stats and print em', () => {
  expect(
    component.find('div.ProfilePage__all__scores').children()
  ).toHaveLength(3);
});

test('Should print all the "ProfileSportScore" components', () => {
  expect(component.find('ProfileSportScore').length).toBe(3);
});

test('all props should match stats', () => {
  const props = component
    .find('ProfileSportScore')
    .map(el => el.props().sport.sport_name);
  expect(props).toEqual(['Tennis', 'PingPong', 'Football']);

  const moreProps = component
    .find('ProfileSportScore')
    .map(el => el.props().sport.data.current_elo);
  expect(moreProps).toEqual([1000, 1900, 700]);
});
