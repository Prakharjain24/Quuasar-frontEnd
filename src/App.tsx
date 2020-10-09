import React from 'react';
import Loginpage from './Component/LoginPageSection/Loginpage';
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
        </React.Fragment>
    );
};
export default App;