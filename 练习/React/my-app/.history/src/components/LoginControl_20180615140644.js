import React, { Component } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};

    this.handleLoginClick = this.handleLoginClick.bing(this);
    this.handleLogoutClick = this.handleLogoutClick.bing(this);
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}    
      </div>
    );
  }
}

export default LoginControl;
