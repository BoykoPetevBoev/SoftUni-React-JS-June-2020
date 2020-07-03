import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class ClassApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.num,
            flag: false
        }
        console.log(this.props)
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> Class Component </p>
                    <Counter num={999}/>
                    <Counter num={0}/>
                    <Counter num={-999}/>
                    <p> Edit <code>src/App.js</code> and save to reload.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Learn React </a>
                </header>
            </div>
        )
    }
}

export default ClassApp;
