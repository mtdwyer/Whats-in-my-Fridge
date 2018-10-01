import { FETCH_RECIPES, FETCH_CLICKED_RECIPE, FETCH_MORE_RECIPES } from '../constants';

let initialState = {
    fetchedRecipes: null,
    clickedRecipe: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);
    let copyArray, splicedArray, copyData;

    switch(action.type) {

        case FETCH_RECIPES:

            copyData = Object.assign({},action.data)
            
            copyArray = copyData.data
            
            //console.log(copyArray, copyData);

            splicedArray = copyArray.splice(0,10)
            //console.log(splicedArray);
            //console.log(updated);
            updated.fetchedRecipes = [];
            
            splicedArray.forEach(item => {
                updated.fetchedRecipes.push(item)
            });
            //console.log(updated);

            updated.splicedArray = copyData.data;

            //updated.fetchedRecipes = recipes;

            return updated;

        case FETCH_MORE_RECIPES:
            //console.log(updated);
            
            let newRecipes = updated.splicedArray.splice(0,10);

            updated.fetchedRecipes = [...state.fetchedRecipes, ...newRecipes]
            
            return updated;

        case FETCH_CLICKED_RECIPE:

            let clickedRecipe = action.data.data;

            updated.clickedRecipe = clickedRecipe;

            return updated
        default: 
            return state;
    }

}