import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM":
      return {
        ...state,
        data: action.random,
        loading: false
      }
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      }
    default: 
      return state;
  }
}

const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const getDrink = () => {
  return dispatch => {
    axios.get(drinkUrl)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_DRINK",
          random: response.data.drinks
        })
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Cannot get drinks."
        })
      })
  }
}
export default drinkReducer;