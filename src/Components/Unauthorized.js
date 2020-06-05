import React from 'react';

function Unauthorized() {
    return (
        <div className="row">
            <div className="container mt-5">
                <p>Access Forbidden</p>
                <hr/>
                <div className="mt-3">You are not supposed to be there.</div>
            </div>
        </div>
    )
}

export default Unauthorized;