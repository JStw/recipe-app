import jwtDecode from 'jwt-decode';
import {useEffect, useState} from "react";

function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const jwtToken = localStorage.getItem('recipe-app-jwt')

        let isExpired = false

        if (jwtToken) {
            const decodedToken = jwtDecode(jwtToken, {complete: true});

            if (decodedToken) {
                isExpired = decodedToken.exp < new Date().getTime()
            }
        }

        setAuthenticated(isExpired)

    }, [])

    return authenticated
}

export default useAuth