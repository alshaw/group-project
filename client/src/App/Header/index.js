import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return (
        <div className = "mainHeader">
            <div className = "title">the<br />blender</div>
            <nav>
                <Link to = "/" className = "home">home</Link>
                <Link to = "drinks" className = "addDrink">add drink</Link>
                <Link to = "/favorites" className = "favorites">favorites</Link>
                <Link to = "/logout" className = "logout">log out</Link>
            </nav>
            
        </div>
            
    )
}

export default Header;