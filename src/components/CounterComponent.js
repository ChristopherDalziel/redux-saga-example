import React, { Component } from "react";

export default class CounterComponent extends Component {
  render() {
    return (
      <div>
        <h1>Counter - Redux Saga Flow Example</h1>
        <button onClick={() => this.props.increment(1)}>Increment + 1</button>
        <button onClick={() => this.props.decrement(1)}>Decrement - 1</button>
        <div>Count: {this.props.state.value}</div>
      </div>
    );
  }
}
