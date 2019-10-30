import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Counter from './components/Counter'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders our counter element', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.contains(<Counter/>)).toEqual(true);
});