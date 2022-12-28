import React from "react";

export class ClassCounter extends React.Component {

  state = {
    count: 0,
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement= () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const {count} = this.state;

    return (
      <div>
      <h1>{count}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
    )
  }
}