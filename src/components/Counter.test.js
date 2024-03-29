import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount} from 'enzyme';
import Counter from './Counter'
import configureMockStore from 'redux-mock-store';
import { incrementCounter } from '../actions/actions';
import { counterReducer } from '../reducers/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../App'



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

  it('applies the counter reducer for increment correctly', () => {
    // given
    const beforeState = {count: 0};
    const action = {type: 'INCREMENT_COUNTER'};
    // when
    const afterState = counterReducer(beforeState, action);
    // then
    expect(afterState).toEqual({count: 1});
  });

})

describe('Counter integration test', () => {
    let store;
  
    beforeEach(() => {
      store = createStore(counterReducer);
    });
  
    it('increments the counter text when the button is clicked', () => {
      const wrapper = mount(<Provider store={store}><App /></Provider>);
      wrapper.find('button').simulate('click');
      wrapper.update();
      expect(wrapper.find('h1').text()).toEqual('1');
    })
  })