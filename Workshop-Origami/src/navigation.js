import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/home-page';

function Navigation () {
 return (
     <BrowserRouter>
        <Switch>
            <Route to='/' component={HomePage}/>
        </Switch>
     </BrowserRouter>
 )
}

export default Navigation