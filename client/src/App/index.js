import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";

function App(props){
    return (
        <div>
            <Header></Header>
            <div>
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <Route path = "/Drinks" component = {Drinks}></Route>
                    <Route path = "/Favorites" component = {Favorites}></Route>
                    <Route path = "/Login" component = {Login}></Route>
                    
                </Switch>  
            </div>
            <Footer></Footer> 
        </div> 
    )
}

export default App;