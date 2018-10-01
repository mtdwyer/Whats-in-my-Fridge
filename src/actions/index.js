import { FETCH_INGREDIENTS, FETCH_RECIPES, FETCH_CLICKED_RECIPE, FETCH_MORE_RECIPES } from '../constants';
import axios from 'axios';


const Axios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})


export const fetchIngredients = (ingredient) => dispatch => {

    Axios
        .get(`/auto`)
        .then(results => {
            
            dispatch({
                type: FETCH_INGREDIENTS,
                data: results
            });

        })
        .catch(err => {
            console.log(err);
        });
} 

export const fetchRecipes = (ingredients) => dispatch => {
    console.log(ingredients);
    

    Axios
        .get(`/search`)
        
        .then( results => {

            dispatch({
                type: FETCH_RECIPES,
                data: results
            })
        })
        .catch(err => {
            console.log(err);
        });

}
export const fetchMoreRecipes = () => dispatch => {
    console.log();
            dispatch({
                type: FETCH_MORE_RECIPES
            });

}

export const getClickedRecipe = (id) => dispatch => {

    Axios
        .get(`/recipe`)
        .then(result => {
            
            dispatch({
                type: FETCH_CLICKED_RECIPE,
                data: result
            })

        }) 
        .catch(err => {
            console.log(err);
        });

}
