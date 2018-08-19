import {shallow, mount, render} from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'


it('expext to render CounterButton component', ()=> {


  expect(shallow(<CounterButton /> )).toMatchSnapshot()
})



it('should increment count when clicked',() => {
  const wrapper = shallow(<CounterButton color={'red'}/>)
  expect(wrapper.state().count).toEqual(0)
  wrapper.find('button').simulate('click')
  expect(wrapper.state().count).toEqual(1)

  expect(wrapper.props().color).toEqual('red')
  // expect(cb.state().counter).to.equal(1)
})
