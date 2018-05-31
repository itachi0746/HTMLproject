
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'hello, world!'
);

const e2 = <h1>hello</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);