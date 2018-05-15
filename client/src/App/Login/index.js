import React, { Component } from 'react';
import LoginForm from "./LoginForm";

import {connect} from "react-redux";
import {login} from "../../redux/auth";

class LoginFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // This is where we will call our signin function from redux
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render() {
        const authErrCode= this.props.authErrCode.login;
        let errMsg = "";
        if(authErrCode < 500 && authErrCode > 399){
            errMsg = "invalid username or password";
        } else if (authErrCode > 499){
            errMsg = "server error";
        }
        return (
            <LoginForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} errMsg={errMsg} />
        )
    }
}

export default connect(state => state.user, {login})(LoginFormContainer);