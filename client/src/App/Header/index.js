import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return (
        <div className = "header">
            <div className = "title">the blender</div>
            <nav>
                <Link to = "/" className = "home">home</Link>
                <Link to = "drinks" className = "addDrink">add drink</Link>
                <Link to = "/favorites" className = "favorites">favorites</Link>
                <Link to = "/login" className = "login">log in</Link>
            </nav>
            
        </div>
            
    )
}

export default Header;