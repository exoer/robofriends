import React, {Component} from 'react';

class CounterButton extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.count !== nextState.count) {
      return true
    }
  }

  updateCount = () => {
    this.setState(state => {

      return {count: this.state.count+1}
    } )
  }

  render() {
    console.log('counter')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
      Count {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
