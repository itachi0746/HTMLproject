/* jshint esversion: 6 */

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

Toggle.propTypes = {

};

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

export default Toggle;