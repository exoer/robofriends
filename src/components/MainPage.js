import React, { Component } from 'react';


import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import './MainPage.css';



export class MainPage extends Component {


  componentDidMount() {
    this.props.onRequestRobots()
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
  }

  filterRobots = () => {
    return this.props.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })

  }


  render() {
    // const { robots, searchfield } = this.state;
    // const { robots } = this.state;
    const { onSearchChange, robots, isPending, errors} = this.props

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}



export default MainPage;
