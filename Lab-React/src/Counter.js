import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
        this.updateCounter = this.updateCounter.bind(this)
    }
    // First
    updateCounter () {
        this.setState({
            counter: Number(this.state.counter) + 1
        })
    }
    // Second
    // updateCounter = () => {
    //     this.setState({
    //         counter: Number(this.state.counter) + 1
    //     })
    // }
    render() {
        return(
            <div>
                <button onClick={this.updateCounter}>{this.state.counter}</button>
            </div>
        )
    }
}
export default Counter