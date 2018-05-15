import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import AddDrinks from "./pages/AddDrinks";
import Favorites from "./pages/Favorites";
import Signup from "./Signup/";

function App(props){
    return (
        <div>
            <Header></Header>
            <div>
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <Route path = "/drinks" component = {AddDrinks}></Route>
                    <Route path = "/favorites" component = {Favorites}></Route>
                    <Route path = "/signup" component = {Signup}></Route>
                </Switch>  
            </div>
            <Footer></Footer> 
        </div> 
    )
}

export default App;