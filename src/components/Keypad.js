// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends Component {

  message = () => {
    console.log('Entering password...');
    
  }
  render() {
    return (
      <div>
        <input onKeyUp={this.message} type="password"/>
      </div>
    );
  }
}

export default Keypad;
