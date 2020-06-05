import React from 'react';
import {Redirect} from "react-router-dom";
import useToken from "./useToken";

function Authenticate() {
    const token = useToken()

    return (
        <div className="row">
            <div className="container mt-5">
                <div className="mt-3">
                    <p>Authentication</p>
                    <hr/>
                    {token.querying ? 'Please wait while authenticating...' : ''}
                    {token.authed ? <Redirect to={`/`}/> : ''}
                    {!token.querying && !token.authed ? 'Sorry, but we were unable to proceed to your authentication.' : ''}
                </div>
            </div>
        </div>
    )
}

export default Authenticate;