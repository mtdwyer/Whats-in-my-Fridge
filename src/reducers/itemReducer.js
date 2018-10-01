import { ADD_ITEM, DELETE_ITEM } from "../constants";

let initialState = {
  ingredients: []
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  let fridge = Object.assign([], updated.fridge);

  switch (action.type) {
    case ADD_ITEM:
      //Object.assign takes two Parameters: target and sources
      //It returns the target object (updated.fridge)
      fridge = Object.assign([], updated.fridge);
      fridge.push(action.data);
      updated["fridge"] = fridge;
      return updated;

    case DELETE_ITEM:
      fridge = Object.assign([], updated.fridge);
      fridge.splice(0, 1);
      updated["fridge"] = fridge;
      return updated;

    default:
      return updated;
  }
};
