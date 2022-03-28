import React from 'react';
import useRecipes from "./useRecipes";
import Recipe from "./Recipe";
import {Redirect} from "react-router-dom";

function Recipes() {
    const recipes = useRecipes()

    return (
        <div className="row">
            <div className="container mt-5">
                <div className="mt-3">
                    {recipes.unauthorized ? <Redirect to={`/login`}/> : ''}
                    <p>Recipes list</p>
                    <hr/>
                    {recipes.loading ? 'Pleas wait while loading your data...' : ''}
                    {recipes.data.map((recipe, key) => {
                        return <Recipe key={key} recipe={recipe}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Recipes;