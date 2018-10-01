import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchIngredients } from "../../actions";
import { Results } from "../views";
//import Spinner from "../../common/Spinner";

class SearchIngredients extends Component {
  constructor(props) {
    super(props);

    this.search = React.createRef();

    this.state = {
      ingredients: ""
    };
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }

  handleSearch = event => {
    let value = this.search.current.value;
    let updated = Object.assign({}, this.state.ingredients);
    updated = value;

    // updated = (value.split(',')).join('%2C');
    console.log(updated);

    this.setState({
      ingredients: updated
    });
  };

  handleSubmitSearch = event => {
    event.preventDefault();
    console.log(this.state.ingredients);

    this.props.fetchIngredients(this.state.ingredients);
    event.target.reset();
  };

  render() {
    //console.log(this.props.ingredients)

    const { fetchedIngredients } = this.props.ingredients;

    let ingredients;

    if (fetchedIngredients !== null) {
      ingredients = fetchedIngredients.map(item => {
        return <Results key={item.id} item={item} />;
      });
    } else {
      //ingredients = <Spinner />;
    }

    return (
      <div style={{ marginTop: 100, textAlign: "center" }}>
        under construction!do not use!
        <br />
        Use a comma to separate ingredients
        <form onSubmit={this.handleSubmitSearch}>
          <input ref={this.search} onKeyUp={this.handleSearch} />
          <br />
          <button>Search by Ingredient</button>
        </form>
        <br />
        {ingredients}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export default connect(
  mapStateToProps,
  { fetchIngredients }
)(SearchIngredients);
