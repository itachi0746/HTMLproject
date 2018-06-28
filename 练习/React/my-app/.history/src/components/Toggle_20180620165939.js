import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // debugger;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({  // 接受上一个状态作为参数 setState可以接受一个对象作为参数,也可以接受一个函数
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
