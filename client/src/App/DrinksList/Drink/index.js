import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Icon, Button, Image } from "semantic-ui-react";
import { deleteDrink, editDrink } from "../../../redux/drinks";
import EditForm from "./EditForm";

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(e) {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    let {
      _id, 
      name, 
      img,
      glass,
      ingredients,
      directions
    } = this.props;

    if (this.state.isEditing) {
      return <div>
      <EditForm { ...this.props} options={{ toggle: this.toggleEdit}} />
      </div>
    }


    return <div>
        <Card.Group>
          <Card>
            <Image src={img} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>{glass}</Card.Meta>
              <Card.Description>{ingredients}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Button onClick={this.toggleEdit}>Edit</Button>
                <Button onClick={() => deleteDrink(_id)}>Delete</Button>
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>;
  }
}

export default connect(state => state, { deleteDrink, editDrink})(Drink);