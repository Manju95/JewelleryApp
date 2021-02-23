import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Authentication from './Authentication';
import Home from './Home';

function CustomRoute(props) {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Authentication} />
                <Route path='/home' component={Home} />
            </Switch>
        </Router>
    );
}

export default CustomRoute;