import {useEffect, useState} from 'react';
import {
    API_BASE_URL
} from "../App";

function useToken() {
    const [token, setToken] = useState({querying: true, authed: false});

    useEffect(() => {
        const authResult = new URLSearchParams(window.location.search);
        const code = authResult.get('code')

        fetch(`${API_BASE_URL}/token/${code}`)
            .then(response => {
                if (!response) {
                    throw new Error('No response found from Cognito')
                }

                return Promise.resolve(response.json())
            })
            .then(data => {
                if (data && data.access_token) {
                    localStorage.setItem('recipe-app-jwt', data.access_token)
                    setToken({querying: false, authed: true})
                } else {
                    setToken({querying: false, authed: false})
                }
            })
    }, [])

    return token;
}

export default useToken;