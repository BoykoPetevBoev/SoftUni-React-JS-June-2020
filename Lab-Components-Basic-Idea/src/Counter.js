import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num: props.num
        }
    }
    updateCounter = () => {
        this.setState({
            num: Number(this.state.num) + 1
        })
    }
    render() {
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.updateCounter}>CLICK</button>
            </div>
        )
    }
}

export default Counter