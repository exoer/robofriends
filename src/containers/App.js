import React, { Component } from 'react';
import {connect} from 'react-redux'

// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundary from '../components/ErrorBoundary'
// import Header from '../components/Header'
import MainPage from '../components/MainPage'
// import './App.css';
import {setSearchField, requestRobots } from '../actions'


const mapStateToProps = (state)=> {
  return {
    searchField:  state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: ()=> requestRobots(dispatch)
    onRequestRobots: ()=> dispatch(requestRobots())
  }
}


export class App extends Component {


  // componentDidMount() {
  //   this.props.onRequestRobots()
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   //   .then(response=> response.json())
  //   //   .then(users => {this.setState({ robots: users})});
  // }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    return (<MainPage {...this.props}/>)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


// const {searchField, onSearchChange, robots, isPending, errors} = this.props
// const filteredRobots = robots.filter(robot =>{
//   return robot.name.toLowerCase().includes(searchField.toLowerCase());
// })
// return isPending ?
//   <h1>Loading</h1> :
//   (
//     <div className='tc'>
//       <Header />
//       <SearchBox searchChange={onSearchChange}/>
//       <Scroll>
//         <ErrorBoundary>
//           <CardList robots={filteredRobots} />
//         </ErrorBoundary>
//       </Scroll>
//     </div>
//   );