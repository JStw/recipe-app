import React from 'react';

function Logout() {
    localStorage.removeItem('recipe-app-jwt')

    return (
        <div className="row">
            <div className="container mt-5">
                <div className="mt-3">

                    <p>Log-out</p>
                    <hr/>
                    You have been disconnected from the app.
                </div>
            </div>
        </div>
    )
}

export default Logout;