import {useEffect, useState} from 'react';
import {API_BASE_URL} from "../App";

function useRecipes() {
    const [recipes, setRecipes] = useState({loading: true, unauthorized: false, data: []});

    useEffect(() => {
        const headers = new Headers()

        headers.append('Authorization', `Bearer ${localStorage.getItem('recipe-app-jwt')}`)

        fetch(`${API_BASE_URL}/recipes`, {headers})
            .then(response => {
                if (response.status === 401) {
                    setRecipes({loading: false, unauthorized: true, data: []})
                    throw new Error('You are not authorized to see this content.')
                }

                return Promise.resolve(response.json())
            })
            .then(data => {
               
                setRecipes({loading: false, unauthorized: false, data: !data || !data.length ? [] : data});
            })
            .catch(error => {
                setRecipes({loading: false, unauthorized: true, data: []})
            });
    }, []);

    return recipes;
}

export default useRecipes;