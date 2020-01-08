// Code Keypad Component Here
import React, { Component } from "react";
class Keypad extends Component {
  handleKeyup = event => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div className="keypad">
        <input type="password" onKeyUp={this.handleKeyup}></input>
      </div>
    );
  }
}

export default Keypad;
