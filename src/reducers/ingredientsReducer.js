import { FETCH_INGREDIENTS } from "../constants";

let initialState = {
  fetchedIngredients: null
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case FETCH_INGREDIENTS:
      let ingredients = action.data.data;
      console.log(ingredients);

      updated.fetchedIngredients = ingredients;
      return updated;
    default:
      return state;
  }
};
