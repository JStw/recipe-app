import React from 'react'
import {NavLink} from "react-router-dom";
import useAuth from "./useAuth";
import {APP_CLIENT_ID, APP_REDIRECT_URI, COGNITO_BASE_URL} from "../App";

function Home() {
    const authenticated = useAuth()
    const link = `${COGNITO_BASE_URL}/login?response_type=code&client_id=${APP_CLIENT_ID}&redirect_uri=${APP_REDIRECT_URI}`

    return (
        <div class="row">
            <div className="container mt-5">
                <div className="mt-3">
                    <p>Welcome to our Recipe List App {authenticated ?
                        <NavLink to={`logout`}>(logout)</NavLink> : ''}</p>
                    <hr/>
                    {!authenticated ? <a href={link} target="_blank">Please log-in to see recipes list.</a> : <ul>
                        <li>You are now logged-in, you can <NavLink to="/recipes">list all your recipes</NavLink>.</li>
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default Home