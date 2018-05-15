import React, {Component} from 'react';
import SignupDisplay from "./SignupDisplay";
import {signup} from "../../redux/auth";
import {connect} from "react-redux";

class SignupDisplay extends Component {
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
        this.setState(prevState => {
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

        // This is where we will call our signup function from redux
        // alert(JSON.stringify(this.state.inputs));
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        const authErrorCode = this.props.authErrCode.signup;
        let errMsg = "";
        if(authErrorCode < 500 && authErrorCode > 399){
            errMsg = "invalid username or password";
        } else if (authErrorCode > 499){
            errMsg = "server error";
        }

        return (
            <SignupForm 
            handleChange={this.handleChange.bind(this)} 
            handleSubmit={this.handleSubmit.bind(this)}
            {...this.state.inputs} errMsg = {errMsg} />
        )
    }
}

export default connect(state => state.user, {signup})(SignupDisplay);

