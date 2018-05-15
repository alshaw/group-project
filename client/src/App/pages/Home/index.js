import React from "react";
import {Link} from "react-router-dom";
import DrinksList from "../../DrinksList";

function Home(props){
    return(
        <div className = "homeWrapper">
        <h1>All Drinks</h1>
           <DrinksList />
        </div>
    )
}


export default Home;