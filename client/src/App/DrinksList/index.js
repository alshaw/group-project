import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrinks, saveDrink } from "../../redux/drinks";
import Drink from "./Drink";
import { Card } from "semantic-ui-react";

class DrinksList extends Component {
  componentDidMount() {
    console.log(this.props.getDrinks());
    console.log("props", this.props);
  }
  render() {
    let { data } = this.props.drinks;
    const drinkComponents = data.map((drink, i) => {
      return <Drink key={i} {...drink} saveDrink={this.props.saveDrink}/>;
    });

    return (
      <div className = "body-wrapper">
        <div className="drink-component">
          <Card.Group centered>
            {drinkComponents}
          </Card.Group>
        </div>;
      </div>
    )
  } 
}

export default connect(state => state, { getDrinks, saveDrink })(DrinksList);
