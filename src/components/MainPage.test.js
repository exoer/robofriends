import {shallow, mount, render} from 'enzyme'
import React from 'react'
import {Provider} from 'react-redux'
// import AppConnected, {App} from './App'
import MainPage from './MainPage'
import { connect } from 'react-redux'
import configureStore from 'redux-mock-store'

let wrapper

beforeEach(()=>{
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders mainpage without crashing', ()=>{
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', ()=>{
  expect(wrapper.instance().filterRobots([])).toEqual([])
})

it('filters robots correctly', ()=>{
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'
    }],
    searchField: 'a',
    isPending: false,
  }
  let wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([])
})
it('filters robots correctly 2', ()=>{
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'
    }],
    searchField: 'john',
    isPending: false,
  }
  let wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual([{
    id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'
  }])
})

//
// it('expoect to render app comonent', ()=>{
//   const mockStore ={
//     robots: [],
//     searchField: ''
//   }
//   expect(shallow(<MainPage />)).toMatchSnapshot()
// })
//
// // describe('App component', ()=> {
// //   const mockStore = configureStore( )
// //   let wrapper;
// //   let store;
// //
// //   beforeEach(()=> {
// //     const initialState = {
// //       searchField: '',
// //       robots: [],
// //       isPending: true,
// //       error: ''
// //     }
// //     store = mockStore(initialState)
// //     wrapper = shallow(<Provider store={store}u><AppConnected /></Provider>)
// //   })
//
//   it('expext to render App component', ()=> {
//
//
//     expect(wrapper).toMatchSnapshot()
//   })
// })
//
// describe('unconnected component', ()=>{
//   it('searches for robots when')
// })
