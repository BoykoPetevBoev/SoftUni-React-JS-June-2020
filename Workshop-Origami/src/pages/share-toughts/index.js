import React, { Component } from 'react';
import styles from './index.module.css';
import Wrapper from '../../components/page-wrapper';
import Button from '../../components/button';
import Post from '../../components/post';

class Share extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getOrigamis();
    }
    async getOrigamis() {
        const promise = await fetch('http://localhost:4000/api/origami');
        const data = await promise.json();
        this.setState({
            data: data.slice(0, 3)
        });
    }
    renderOrigami() {
        const { data } = this.state;
        return data.map((origami, index) => {
            return (
                <Post key={origami._id} index={index} {...origami} />
            )
        })

    }

    render() {
        return (
            <Wrapper>

                <div className={styles.container}>
                    <div>
                        <h1 className={styles.title}>Share your toughts...</h1>
                        <textarea className={styles.textarea}></textarea>
                        <Button title='Post' />
                    </div>
                    <div>
                        <h2>Last 2 post on your wall</h2>
                        {this.renderOrigami()}
                    </div>
                </div>

            </Wrapper>
        );
    }
}

export default Share;
