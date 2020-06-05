import {useEffect, useState} from 'react';
import {APP_CLIENT_ID, APP_CLIENT_SECRET, APP_GRANT_TYPE, APP_REDIRECT_URI, COGNITO_BASE_URL} from "../App";

function useToken() {
    const [token, setToken] = useState({querying: true, authed: false});

    useEffect(() => {
        const authResult = new URLSearchParams(window.location.search);
        const code = authResult.get('code')
        const formData = new URLSearchParams();
        const decoder = new TextDecoder('utf-8')

        formData.append('grant_type', APP_GRANT_TYPE);
        formData.append('code', code);
        formData.append('client_id', APP_CLIENT_ID);
        formData.append('client_secret', APP_CLIENT_SECRET);
        formData.append('redirect_uri', APP_REDIRECT_URI);

        const headers = new Headers()

        headers.append('Content-Type', 'application/x-www-form-urlencoded')

        fetch(`${COGNITO_BASE_URL}/oauth2/token`, {headers, body: formData.toString(), method: 'POST'})
            .then(response => {
                if (!response) {
                    throw new Error('No response found from Cognito')
                }

                return Promise.resolve(response.body.getReader().read()
                    .then(({value, done}) => {
                        return Promise.resolve(JSON.parse(decoder.decode(value)))
                    }))
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