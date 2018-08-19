import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import * as reducers from './reducers'

describe('search robots', ()=>{
  const initialStateSearch = {
    searchField: ''
  }
  it('shoud return the initial state', ()=>{
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
  })
  it('shoud chandle CHANGE_SEARCH_FIELD', ()=>{
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({searchField: 'abc'})
  })
})

describe('requestRobots reducer', ()=>{

  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  }

  it('shoud return the initial state', ()=>{
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })
  it('shoud handle REQUEST_ROBOTS_PENDING', ()=>{
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING,

    })).toEqual({robots: [], isPending: true, error: ""})
  })

  it('shoud handle REQUEST_ROBOTS_SUCCESS', ()=>{
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload:[
        {id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'}
      ]

    })).toEqual({robots: [{id: 1, name: "john snow", username: 'JohnJohn', email: 'john@john.com'}], isPending: false, error: ""})
  })

  it('shoud handle REQUEST_ROBOTS_FAILED', ()=>{
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload:"NO"
    })).toEqual({robots: [],isPending: false, error: "NO"})
  })

})
