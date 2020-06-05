import React from 'react'

function Recipe(props) {
    return (
        <div>
            <h3>{props.recipe.name} - (Category: {props.recipe.category})</h3>
            <i>Préparation: {props.recipe.preparation}</i><br/>
            <small><u>Calories:</u> <b>{props.recipe.calories}</b></small>
        </div>
    )
}

export default Recipe