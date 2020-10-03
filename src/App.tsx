import React from 'react';
import Home from './Component/LandingPageSection/Home';
import Loginpage from './Component/LoginPageSection/Loginpage';
import Joinus from './Component/LoginPageSection/Joinus';
import ServiceCard from '../src/Component/ServicesSection/ServiceCard';
import Daytona from '../src/Component/Daytona';

import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' strict component={Daytona} />
                <Route path='/login' component={Loginpage} />
                <Redirect to='/' />
            </Switch>
            {/* <Daytona /> */}
            {/* <Loginpage /> */}
            {/* <Joinus /> */}
            {/* <ServiceCard /> */}
        </React.Fragment>
    );
}; 
export default App;