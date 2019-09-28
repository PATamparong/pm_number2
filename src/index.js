import ReactDOM from "react-dom";
import React, { Component } from "react";
import Card from "./Card";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: null,
      number2: null,
      total: null
    };
  }
  add(a) {
    this.setState({
      total: parseInt(this.state.number1) + parseInt(this.state.number2)
    });
  }
  subtract(b) {
    this.setState({ total: this.state.number1 - this.state.number2 });
  }
  divide(c) {
    this.setState({ total: this.state.number1 / this.state.number2 });
  }
  multiply(d) {
    this.setState({ total: this.state.number1 * this.state.number2 });
  }
  exponent(d) {
    this.setState({ total: this.state.number1 ** this.state.number2 });
  }

  number1(e) {
    this.setState({ number1: e.target.value });
  }

  number2(e) {
    this.setState({ number2: e.target.value });
  }
  total(e) {
    this.setState({ total: e.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Calculator</h1>
          <input
            type="number"
            placeholder="number1"
            value={this.state.number1}
            onChange={e => this.number1(e)}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="number2"
            value={this.state.number2}
            onChange={e => this.number2(e)}
          />
          <br />
          <br />
          <input
            type="number"
            palceholder="total"
            value={this.state.total}
            onChange={e => this.total(e)}
          />
          <br />
          <br />
          <button onClick={a => this.add(a)}>+</button>
          <button onClick={b => this.subtract(b)}>-</button>
          <button onClick={d => this.multiply(d)}>*</button>
          <button onClick={c => this.divide(c)}>/</button>
          <button onClick={d => this.exponent(d)}>^</button>
          <br />
        </center>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
