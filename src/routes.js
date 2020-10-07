import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Trending from './components/trending/Trending';
import Starred from './components/starred/Starred';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Landing /></Route>
            <Route exact path='/trending'><Trending /></Route>
            <Route exact path='/starred'><Starred /></Route>
        </Switch>
    );
}


export default Routes;