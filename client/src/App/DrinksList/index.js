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
    // let sortedArray = [];
    // if (!loading) {
    //   sortedArray = data.sort((num1, num2) => {
    //     let num1Total = num1.upvotes - num1.upvotes;
    //     let num2Total = num2.upvotes - num2.upvotes;
    //     return num2Total - num1Total;
    //   });
    // }
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
