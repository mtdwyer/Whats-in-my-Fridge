import { FETCH_INGREDIENTS, FETCH_RECIPES, FETCH_CLICKED_RECIPE } from '../constants';
import axios from 'axios';

// Point the import to the API Key file you want to use
import { FOOD_API_KEY_HEADER } from './apiKey-MichaelLive';


const Axios = axios.create({
    baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com',
    timeout: 1000,
    headers: {
        'X-Mashape-Key': `${FOOD_API_KEY_HEADER}`,
        'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    }
})


export const fetchIngredients = (ingredient) => dispatch => {

    Axios
        .get(`/food/ingredients/autocomplete?query=${ingredient}&number=10&intolerances=egg`)
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
        .get(`/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1`)
        
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

export const getClickedRecipe = (id) => dispatch => {

    Axios
        .get(`/recipes/${id}/information`)
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
