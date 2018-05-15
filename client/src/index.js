import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/index";
import stylesheet from "./styles.css";
import "semantic-ui-css/components/card.min.css";
import "semantic-ui-css/components/image.min.css";
import "semantic-ui-css/components/button.min.css";
// import "semantic-ui-css/semantic.min.css";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"));