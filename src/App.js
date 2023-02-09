import React from "react";
import { hot } from "react-hot-loader";
import Warning from "./Warning";

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <h2 className={this.state.count > 10 ? "warning" : null}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState((state) => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? <Warning /> : null}
      </div>
    );
  }
}

export default hot(module)(App);
