import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import HomePage from './pages/home-page/index';
import SharePage from './pages/share-toughts';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import ErrorPage from './pages/error';
import UserContext from './Context';


class Navigation extends Component {

    static contextType = UserContext;

    render() {
        const { loggedIn } = this.context;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/post' component={SharePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/profile' component={Profile} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation