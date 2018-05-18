import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Image } from "semantic-ui-react";

import { deleteDrink, editDrink, saveDrink } from "../../../redux/drinks";
import EditForm from "./EditForm";

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(e) {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    let { _id, name, img, glass, ingredients } = this.props;

    if (this.state.isEditing) {
      return (
        <div>
          <EditForm {...this.props} options={{ toggle: this.toggleEdit }} />
        </div>
      );
    }

    return (
      <div>
        <Card color="teal" style={{ margin: "10px" }}>
          {/* <Image src={img} className="card-image" /> */}
          <div className="card-image"style={{backgroundImage: `url("${img}")`}}></div>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{glass}</Card.Meta>
            <Card.Description>{ingredients}</Card.Description>
            <Card.Description />
          </Card.Content>
          <Card.Content extra>
            <a>
              <Button.Group>
                <Button basic primary="true" onClick={this.toggleEdit}>
                  Edit
                </Button>
                <Button
                  basic
                  color="grey"
                  onClick={() => this.props.saveDrink(_id)}
                >
                  Save
                </Button>
                <Button
                  basic
                  negative="true"
                  onClick={() => this.props.deleteDrink(_id)}
                >
                  Delete
                </Button>
              </Button.Group>
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default connect(state => state, { deleteDrink, editDrink, saveDrink })(Drink);
