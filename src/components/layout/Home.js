import React, { Component } from 'react'
import { SearchRecipes, SearchIngredients } from '../containers';

class Home extends Component {
  render() {
    
    return (
      <div>

       <SearchIngredients />
        <SearchRecipes />
        
        
      </div>
    )
  }
}

export default Home;