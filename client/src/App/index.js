import React from "react";
import { Component } from "react"; 
import { Route, Switch, withRouter, Redirect } from "react-router-dom";  
import { connect } from "react-redux";
import { verify } from "../redux/auth"
// import {Switch, Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// import Home from "./pages/Home";
import AddDrinks from "./pages/AddDrinks";
import Favorites from "./pages/Favorites";
import Signup from "./Signup/";
import ProtectedRoute from "./ProtectedRoute";
// import Profile from "./Profile";
import Login from "./Login";


class App extends Component {

    componentDidMount(){  
        this.props.verify();
    }

    render(props){
        const {isAuthenticated, loading} = this.props
        return (
            <div>
                <Header></Header>
                <div>
                    {/* <Switch>
                        <Route exact path = "/" component = {Home}></Route>
                        <Route path = "/drinks" component = {AddDrinks} />
                        <ProtectedRoute path = "/favorites" component = {Favorites} />
                        <Route path = "/signup" component = {Signup}></Route>
                    </Switch>   */}
                    {loading ? <div>...Loading user data </div>: 
                    <Switch>
                        <Route exact path="/" render={ props => isAuthenticated ? 
                            <Redirect to="/drinks"/> :
                            <Signup {...props}/>
                        }/>
                        <Route path="/login" render={ props => isAuthenticated ?
                            <Redirect to="/drinks"/> :
                            <Login {...props}/>
                        } />
                        <ProtectedRoute path="/favorites" component={Favorites}/>
                        <ProtectedRoute path="/add-drink" component={AddDrinks}/>
                        {/* <ProtectedRoute path="/profile" component={Profile}/> */}
                    </Switch>
                    }
                </div>
                <Footer></Footer> 
            </div> 
        )
    }
}

export default withRouter(connect(state => state.user,{verify})(App));  
