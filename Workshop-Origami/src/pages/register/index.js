import React, { Component } from 'react';
import styles from './index.module.css';
import Wrapper from '../../components/page-wrapper';
import Button from '../../components/button';
import Input from '../../components/input';
import UserContext from '../../Context';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
    }
    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {
            username,
            password,
            rePassword
        } = this.state;

        if (!username) {
            alert('Invalid username');
            return;
        }
        else if (!password) {
            alert('Invalid password');
            return;
        }
        else if (password !== rePassword) {
            alert('Password and RePassword must match');
            return;
        }

        const promise = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        try {
            if (promise.ok) {
                const token = promise.headers.get('Authorization');
                document.cookie = `token=${token}`;

                const data = await promise.json();
                const user = {
                    username: data.username,
                    id: data._id
                }
                this.context.login(user);

                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { username, password, rePassword } = this.state;
        return (
            <Wrapper>
                <div className={styles.container}>
                    <h1 className={styles.title}>Register Page</h1>
                    <form onSubmit={this.onSubmit}>
                        <Input
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                            label='Username'
                            id='username'
                        />
                        <Input
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            label='Password'
                            id='password'
                        />
                        <Input
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                            label='RePassword'
                            id='re-password'
                        />
                        <div>
                            <Button type='submit' title='Register' />
                        </div>
                    </form>

                </div>
            </Wrapper>
        );
    }
}

export default Register;
