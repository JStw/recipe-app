import React from 'react';
import './App.css';
import Recipes from "./Components/Recipes";
import Unauthorized from "./Components/Unauthorized";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Authenticate from "./Components/Authenticate";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import Header from "./Components/Header";

export const API_BASE_URL = 'https://9sx5ad2dy1.execute-api.us-east-1.amazonaws.com';
export const COGNITO_BASE_URL = 'https://recipe.auth.us-east-1.amazoncognito.com';
export const APP_REDIRECT_URI = 'https://d1ynvwrx627ssr.cloudfront.net/authenticate';
export const APP_CLIENT_ID = '738coo3jhas54jm97mjh5nmnmm';


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
