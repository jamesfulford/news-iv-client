import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../components/Homepage';

const Main = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
            </Switch>
        </div>
    );
}

export default Main;
