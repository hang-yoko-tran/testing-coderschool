import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Counter from './Counter'



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