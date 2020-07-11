import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Input from './Input';
import getData from './services/index';

class ClassApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.num,
            flag: false
        }
        this.counters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    renderCounters() {
        return this.counters.map((counter, i) => {
            console.log(counter)
            return (
                <Counter key={i} counter={counter} />
            )
        })
    }
    getData = async () => {
        const data = await getData()
        this.setState({
            data
        })
    }
    componentDidMount(){
        this.getData();
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Input />
                    <p> Class Component </p>
                    {this.renderCounters()}
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
