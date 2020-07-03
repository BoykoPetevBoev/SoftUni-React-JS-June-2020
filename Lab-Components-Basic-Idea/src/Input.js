import React, { useState } from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.changeValue} />
                <p>{this.state.value}</p>
            </div>
        )
    }

}

export default Input