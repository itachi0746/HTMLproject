/* jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
        <button onclick={this.handleClick}>
          {this.state.isToggleOn?'ON':'OFF'}
        </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
