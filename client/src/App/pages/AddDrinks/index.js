import React from "react";
import Form from "./Form";
import DrinksList from "../../DrinksList"

function AddDrinks(props) {
    return (
        <div className="body-wrapper">
            <Form />
            <DrinksList />
        </div>
    )
}

export default AddDrinks;