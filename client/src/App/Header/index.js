import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth";

function Header(props){
    const { isAuthenticated } = props; 
    return (
        <div className = "mainHeader">
            <div className = "title">the<br />blender</div>
            <nav>
                {/* <Link to = "/" className = "home">home</Link> */}
                {/* <Link to = "drinks" className = "addDrink">add drink</Link> */}
                {/* <Link to = "/favorites" className = "favorites">favorites</Link> */}
                {/* <Link to = "/login" className = "login">log in</Link> */}
                {!isAuthenticated && <div className="signup"><Link to="/">Sign Up</Link></div>}
                {!isAuthenticated && <div className="login"><Link to="/login">Log In</Link></div>}
                {isAuthenticated && <div className="drinks"><Link to="/drinks">drinks</Link></div> }
                {isAuthenticated && <div className="favorites"><Link to="/favorites">favorites</Link></div>}
                {isAuthenticated && <div className="addDrink"><Link to="/add-drink">add drink</Link></div>}
                {isAuthenticated && <div className="logout"><button onClick={props.logout}>Logout</button></div>}
            </nav>
            
        </div>
            
    )
}

export default connect(state => state.user, { logout })(Header);  
