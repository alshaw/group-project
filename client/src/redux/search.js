import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INGREDIENT":
      return {
        ...state,
        data: action.ingredient,
        loading: false
      }
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      }
    default:
      return state
  }
}

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={input}";

export const getIngredient = () => {
  return dispatch => {
    axios.get(searchUrl)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_INGREDIENT",
          drinks: response.data.drinks
        })
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, data is unavalaible."
        })
      })
  }
}
export default searchReducer;