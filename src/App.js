import React from 'react';
import './App.css';
import Recipes from "./Components/Recipes";
import Unauthorized from "./Components/Unauthorized";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Authenticate from "./Components/Authenticate";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import Header from "./Components/Header";

export const API_BASE_URL = '<< put your api base url here >>';
export const COGNITO_BASE_URL = '<< put the cognito base url here >>';
export const APP_REDIRECT_URI = '<< put your cloudfront url here >>/authenticate';
export const APP_CLIENT_ID = '<< put your amazon app client id here >>';


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/recipes">
                    <Recipes/>
                </Route>
                <Route exact path="/unauthorized">
                    <Unauthorized/>
                </Route>
                <Route exact path="/authenticate">
                    <Authenticate/>
                </Route>
                <Route exact path="/logout">
                    <Logout/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
