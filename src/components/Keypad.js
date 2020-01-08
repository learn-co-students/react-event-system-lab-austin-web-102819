import React from 'react';

export default class Keypad extends React.Component {

    prompt =() => {
        console.log('Entering password...')
    }

    render() {
        return <input onKeyUp={this.prompt} type="password"/>
    }
}