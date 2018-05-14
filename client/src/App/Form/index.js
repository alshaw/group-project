import React, { Component } from "react";
import { connect } from "react-redux";
import { addDrink } from "../../redux/drinks";
import FormDisplay from "./FormDisplay";


class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        name: "",
        img: "",
        glass: "",
        ingredients: "",
        directions: ""
      },
      drinks: []
    };
    this.state = this.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addDrink(this.state.inputs);
    this.setState(this.initialState);
  }

  handleChange(e) {
    const { name, value} = e.target
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      ...this.state
    }
    return (
      <FormDisplay {...props}></FormDisplay>
    )
  }
}

export default connect(null, { addDrink })(Form);


