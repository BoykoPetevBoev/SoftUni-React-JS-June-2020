import React, { Component } from 'react';
import styles from './index.module.css';
import Post from '../post';

class Origami extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    async getOrigamis() {
        const promise = await fetch('http://localhost:4000/api/origami');
        const data = await promise.json();
        this.setState({
            data
        });
    }
    componentDidMount() {
        this.getOrigamis();
    }
    renderOrigami() {
        const { data } = this.state;

        return data.map(origami => {
            return (
               <Post key={origami._id} {...origami} />
            )
        })

    }

    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.title}>Origami</h1>
                <div className={styles.posts}>
                    {this.renderOrigami()}
                </div>
            </div>
        )
    }
}

export default Origami