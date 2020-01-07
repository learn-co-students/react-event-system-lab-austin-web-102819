// Code EyesOnMe Component Here
import React, { Component} from 'react';

export default class Keypad extends Component {
    focal = () => (
        console.log('Good!')
    )
    blurry = () => (
        console.log('Hey! Eyes on me!')
    )
    render() {
        return ( <div>
            <button onFocus={this.focal} onBlur={this.blurry} />
        </div>
            
        )
    }
}