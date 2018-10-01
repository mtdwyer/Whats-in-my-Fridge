import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchRecipes, fetchMoreRecipes } from '../../actions'
import { Results } from '../views';
import Spinner from '../../common/Spinner';

 class SearchRecipes extends Component {

	constructor(props) {
		super(props);

		this.search = React.createRef();

		this.state = {
			ingredients: ''
		}

	}
	
	handleSearch = (event) => {
		let value = this.search.current.value;
		let updated = Object.assign({}, this.state.ingredients);
	
		updated = (value.split(',')).join('%2C');
		console.log(updated);
		
		this.setState({
			ingredients: updated
		});
	}

	handleSubmitSearch = (event) => {
		event.preventDefault();
		console.log(this.state.ingredients);
		
		this.props.fetchRecipes(this.state.ingredients);
		event.target.reset();

		this.scrollListener = window.addEventListener('scroll', (e) => {
			this.handleScroll(e)
		})
	}

	handleScroll = (e) => {
		
		let lastRecipe = document.querySelector('div.recipes:last-child')
		let lastRecipeOffset = lastRecipe.offsetTop + lastRecipe.clientHeight;
		let pageOffset = window.pageYOffset + window.innerHeight;
		let bottomOffset = 20;

		if( pageOffset > lastRecipeOffset - bottomOffset) {
			this.props.fetchMoreRecipes();
		}
	}
  
  render() {

		//console.log(this.props.recipes)

		const { fetchedRecipes } = this.props.recipes;

		let recipes;

		if ( fetchedRecipes !== null) {
			recipes = fetchedRecipes.map((item) => {
				return <Results key={item.id} item={item} />
			});
		} else {
			recipes = <Spinner />;
		}

    return (
      <div style={{marginTop: 100, textAlign: 'center'}}>
			Use a comma to separate ingredients
				<form onSubmit={this.handleSubmitSearch}>
					<input ref={this.search} onKeyUp={this.handleSearch} />
					<br />
					<button>Search by Ingredient</button>
				</form>
				<br />
        {recipes}
      </div>
    )
  }
}

const mapStateToProps = state => ({
	recipes: state.recipes
});

export default connect(mapStateToProps, { fetchRecipes, fetchMoreRecipes })(SearchRecipes);