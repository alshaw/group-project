import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import { login } from "../../redux/auth";
import { connect } from "react-redux";

class LoginFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
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
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        // This is where we will call our signin function from redux
        alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }

    render() {
        return (
            <LoginForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(state => state.user, { login })(LoginFormContainer);  