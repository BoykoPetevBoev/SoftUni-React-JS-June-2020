import React, { Component } from 'react';
import UserContext from './Context';

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

class Authorization extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            user: null
        }
    }
    componentDidMount = async () => {
        const token = getCookie('token');
        console.log(token);

        if (!token) {
            this.logout();
            return
        }

        const promise = await fetch('http://localhost:4000/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        try {
            const res = await promise.json();

            res.status
                ? this.login({
                    username: res.user.username,
                    id: res.user._id
                })
                : this.logout()
        }
        catch (error) {
            console.log(error);
        }

    }
    login = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }
    logout = () => {
        document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setState({
            loggedIn: false,
            user: null
        })
    }
    render() {
        const { loggedIn, user } = this.state;
        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default Authorization;