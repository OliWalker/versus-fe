import React from 'react';
import { shallow } from 'enzyme';
import ProfileSportScore from './ProfileSportScore';

test('Should render all them props', () => {
  const component = shallow(<ProfileSportScore score={5} title={'Tennis'} />);

  expect(component.find('i').text()).toBe('5');
  expect(component.find('.ProfilePage__sport__name__single').text()).toBe(
    'Tennis'
  );

  component.setProps({ score: 3, title: 'PingPong' });

  expect(component.find('i').text()).toBe('3');
  expect(component.find('.ProfilePage__sport__name__single').text()).toBe(
    'PingPong'
  );
});
