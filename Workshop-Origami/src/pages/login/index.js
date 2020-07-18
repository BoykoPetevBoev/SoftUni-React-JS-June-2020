import React, { Component } from 'react';
import styles from './index.module.css';
import Wrapper from '../../components/page-wrapper';
import Button from '../../components/button';
import Input from '../../components/input';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }
    render() {
        const { email, password } = this.state;
        return (
            <Wrapper>
                <div className={styles.container}>
                    <h1 className={styles.title}>Login Page</h1>
                    <form>
                        <Input
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                            label='Email'
                            id='email'
                        />
                        <Input
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            label='Password'
                            id='password'
                        />
                        <div>
                            <Button type='submit' title='Login' />
                        </div>
                    </form>

                </div>
            </Wrapper>
        );
    }
}

export default Login;
