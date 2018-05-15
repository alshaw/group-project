import React from "react";
import {Link} from "react-router-dom";
import DrinksList from "../../DrinksList";
// import SearchBar from "./SearchBar";

function Home(props){
    return(
        <div className = "homeWrapper">
           {/* <SearchBar /> */}
           <DrinksList />
        </div>
    )
}


export default Home;