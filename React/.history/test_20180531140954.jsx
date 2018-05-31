

function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}

const element = <Welcome name='Sara' />;

ReactDOM.render(element, document.getElementById("root"));
