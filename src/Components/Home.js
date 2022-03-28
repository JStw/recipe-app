import React from 'react'
import {NavLink} from "react-router-dom";
import useAuth from "./useAuth";
import { LOGIN_URL } from '../App'

function Home() {
    const authenticated = useAuth()

    return (
        <div class="row">
            <div className="container mt-5">
                <div className="mt-3">
                    <p>Welcome to our Recipe List App {authenticated ?
                        <NavLink to={`logout`}>(logout)</NavLink> : ''}</p>
                    <hr/>
                    {!authenticated ? <a href={LOGIN_URL} target="_blank">Please log-in to see recipes list.</a> : <ul>
                        <li>You are now logged-in, you can <NavLink to="/recipes">list all your recipes</NavLink>.</li>
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default Home