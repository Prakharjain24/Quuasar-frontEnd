import React from 'react';
import Home from './Component/LandingPageSection/Home';
import Daytona from '../src/Component/Daytona';
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route path='/login' component={LoginPage} /> */}
                <Redirect to='/' />
            </Switch>
            <Daytona />
        </React.Fragment>
    );
}; 
export default App;