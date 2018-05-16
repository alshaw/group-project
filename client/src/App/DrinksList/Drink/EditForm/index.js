import React, { Component } from "react";
import { connect } from "react-redux";
import { addDrink, editDrink } from "../../../../redux/drinks";

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { name, img, glass, ingredients, directions } = props;
    this.state = {
      inputs: {
        name: name || "",
        img: img || "",
        glass: glass || "",
        ingredients: ingredients || "",
        directions: directions || ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      };
    });
  }
  handleSubmit(e) {
    e.persist();
    e.preventDefault();
    const { _id, addDrink, editDrink, clear, add, options } = this.props;
    if (add) {
      addDrink(this.state.inputs);
    } else {
      editDrink(this.state.inputs, _id);
      options.toggle();
    }
    if (clear) {
      this.clearInputs();
    }
  }
  clearInputs() {
    this.setState({
      inputs: {
        name: "",
        img: "",
        glass: "",
        ingredients: "",
        directions: ""
      }
    });
  }

  render() {
    const { name, img, glass, ingredients, directions } = this.state.inputs;
    return (
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="name"
          value={name}
          type="text"
          placeholder="name"
        />
        <input
          onChange={this.handleChange}
          name="img"
          value={img}
          type="text"
          placeholder="Img"
        />
        <input
          onChange={this.handleChange}
          name="glass"
          value={glass}
          type="text"
          placeholder="Glass"
        />
        <input
          onChange={this.handleChange}
          name="ingredients"
          value={ingredients}
          type="text"
          placeholder="ingredients"
        />
        <button className="submit">Save Changes</button>
      </form>
    );
  }
}

export default connect(null, { addDrink, editDrink })(EditForm);
