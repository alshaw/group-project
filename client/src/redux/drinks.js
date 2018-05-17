import axios from "axios";
const url = "/api/drinks/";

export function getDrinks() {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: "GET_DRINKS",
          drink: response.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function addDrink(newDrink) {
  return dispatch => {
    axios
      .post(url, newDrink)
      .then(response => {
        console.log(response);
        let { data } = response;
        dispatch({
          type: "ADD_DRINK",
          data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function editDrink(editedDrink, id) {
  return dispatch => {
    axios
      .put(url + id, editedDrink)
      .then(response => {
        console.log(response);
        dispatch({
          type: "EDIT_DRINK",
          editedDrink: response.data,
          id
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function deleteDrink(id) {
  return dispatch => {
    axios
      .delete(url + id, id)
      .then(response => {
        dispatch({
          type: "DELETE_DRINK",
          id
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export const saveDrink = (drink) => {
  console.log("saved drink", saveDrink);
  return dispatch => {
    dispatch({
      type: "SAVE_DRINK",
      drink: drink
    })
  }
}

export default function drinksReducer(
  prevState = { 
    data: [], 
    loading: true 
  },
  action
) {
  switch (action.type) {
    case "GET_DRINKS":
      return {
        data: action.drink,
        loading: false
      };

    case "ADD_DRINK":
      return {
        data: [...prevState.data, action.data],
        loading: false
      };
    case "SAVE_DRINK":
      return {
        ...prevState, 
        savedDrinks: [...prevState.savedDrinks, action.drinks]
      }

    case "EDIT_DRINK":
      return {
        data: prevState.data.map(drink => {
          if (drink._id === action.id) {
            return action.editedDrink;
          } else {
            return drink;
          }
        }),
        loading: false
      };

    case "DELETE_DRINK":
      return {
        data: prevState.data.filter(drink => {
          return drink._id !== action.id;
        }),
        loading: false
      };

    default:
      return prevState;
  }
}
