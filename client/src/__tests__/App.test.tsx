import React from "react";
import { shallow } from 'enzyme';
import App from '../App';




it('App renders without breaking', () => {
  const wrapper = shallow(<App></App>);
  expect(wrapper.length).toBe(1);
});

it('Map renders without breaking', () => {

});

it('Tab renders without breaking', () => {

});

it('Tab changes on click', () => {

});
