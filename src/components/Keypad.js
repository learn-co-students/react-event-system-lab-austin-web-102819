// Code Keypad Component Here
import React, { Component} from 'react';

export default class Keypad extends Component {
    click = () => (
        console.log('Entering password...')
    )
    render() {
        return ( <div>
            
            Password: <input onKeyUp={this.click} type="password"></input>
            
            </div>
        )
    }
}