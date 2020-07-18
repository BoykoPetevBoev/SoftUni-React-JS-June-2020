import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/home-page/index';
import SharePage from './pages/share-toughts';
import Login from './pages/login';
import Register from './pages/register';

function Navigation () {
 return (
     <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/post' component={SharePage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />

        </Switch>
     </BrowserRouter>
 )
}

export default Navigation