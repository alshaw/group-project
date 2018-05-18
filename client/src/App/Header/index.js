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
                
                    {!isAuthenticated && <div className="signup"><Link to="/" >Sign Up</Link></div>}
                    {!isAuthenticated && <div className="login"><Link to="/login">Log In</Link></div>}
                <div className = "menuWrapper">
                    {isAuthenticated && <div className="drinks"><Link to="/drinks" className="drinks1">drinks</Link></div> }
                    {isAuthenticated && <div className="favorites"><Link to="/favorites" className="favorites1">favorites</Link></div>}
                    {isAuthenticated && <div className="addDrink"><Link to="/add-drink" className="addDrink1">add drink</Link></div>}
                    {isAuthenticated && <div className="logout"><button onClick={props.logout} className="logout1">log out</button></div>}
                </div>
            </nav>
            
        </div>
            
    )
}

export default connect(state => state.user, { logout })(Header);  
