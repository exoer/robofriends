import {shallow, mount, render} from 'enzyme'
import React from 'react'
import CardList from './CardList'


it('expext to render CardList component', ()=> {

  // expect(shallow(<CardList />).length).toEqual(1)
  const mockRobots = [
    {
      id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})
