import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

// import MainPage from './main/main_page'; --may add this later on
import Navbar from './navbar';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Navbar} />
        {/* for now the component is Navbar, but can change to MainPage later on */}
    </Switch>
);

export default App;