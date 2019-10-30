import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Counter from './Counter'
import configureMockStore from 'redux-mock-store';
import { incrementCounter } from '../actions/actions';



describe('<Counter />', () => {
    it('renders h1 components', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.contains(<h1>H</h1>)).toEqual(true)
})

it('renders button components', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.contains(<button>Increase</button>)).toEqual(true)
})


})

describe('Counter redux pieces', () => {
    let store
beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it('sends an increment counter action', () => {
    store.dispatch(incrementCounter());
    expect(store.getActions()).toEqual(
      [
        { type: 'INCREMENT_COUNTER' },
      ]);
  })

})