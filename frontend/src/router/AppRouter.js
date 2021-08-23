import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Details } from '../components/Details';
import { List } from '../components/List';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/items/search/:query" component={List}/>
                    <Route exact path="/items/:id" component={Details}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
