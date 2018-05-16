import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import AddDrinks from "./pages/AddDrinks";
import Favorites from "./pages/Favorites";
import Signup from "./Signup/";
import ProtectedRoute from "./ProtectedRoute"; 
import Login from "./Login";

function App(props){
    return (
        <div>
            <Header></Header>
            <div>
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <ProtectedRoute path = "/drinks" component = {AddDrinks}></ProtectedRoute>
                    <ProtectedRoute path = "/favorites" component = {Favorites}></ProtectedRoute>
                    <Route path = "/signup" component = {Signup}></Route>
                    <Route path = "/login" component = {Login}></Route>
                </Switch>  
            </div>
            <Footer></Footer> 
        </div> 
    )
}

export default App;