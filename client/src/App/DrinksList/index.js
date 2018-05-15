import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrinks } from "../../redux/drinks";
import Drink from "./Drink";
import { Card } from "semantic-ui-react";

class DrinksList extends Component {
  componentDidMount() {
    console.log(this.props.getDrinks());
    console.log("props", this.props);
  }
  render() {
    console.log(this.props);
    let { data } = this.props.drinks;
    const drinkComponents = data.map((drink, i) => {
      return <Drink key={i} {...drink} />;
    });

    return <div className="drink-component">
        <Card.Group centered>
          {drinkComponents}
        </Card.Group>
      </div>;
  } 
}

export default connect(state => state, { getDrinks })(DrinksList);
