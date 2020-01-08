import React from 'react';

export default class EyesOnMe extends React.Component {


    fireF = () => {
        console.log('Good!')
    }

    fireB = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return <button onFocus={this.fireF} onBlur={this.fireB} >Check, check, check it out!</button>
    }
}