import React, { Component, useState, useEffect } from 'react';
import UserContext from './Context';

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

function Authorization(props) {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');

        if (!token) {
            logout();
            return
        }

        fetch('http://localhost:4000/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(promise => {
                return promise.json();
            })
            .then(res => {
                res.status
                    ? login({
                        username: res.user.username,
                        id: res.user._id
                    })
                    : logout()
            })
            .catch(err => console.log(err))
    }, []);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
    }
    const logout = () => {
        document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setLoggedIn(false);
        setUser(null);
    }
    return (
        <UserContext.Provider value={{
            loggedIn,
            user,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


// class Authorization extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loggedIn: false,
//             user: null
//         }
//     }
//     componentDidMount = async () => {
//         const token = getCookie('token');
//         console.log(token);

//         if (!token) {
//             this.logout();
//             return
//         }

//         const promise = await fetch('http://localhost:4000/api/user/verify', {
//             method: 'POST',
//             body: JSON.stringify({ token }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         try {
//             const res = await promise.json();

//             res.status
//                 ? this.login({
//                     username: res.user.username,
//                     id: res.user._id
//                 })
//                 : this.logout()
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }
//     login = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//     }
//     logout = () => {
//         document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//     }
//     render() {
//         const { loggedIn, user } = this.state;
//         return (
//             <UserContext.Provider value={{
//                 loggedIn,
//                 user,
//                 login: this.login,
//                 logout: this.logout
//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         );
//     }
// }

export default Authorization;