import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIngredients, addItem, deleteItem } from "../actions";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Search extends Component {
  constructor(props) {
    super(props);

    this.search = React.createRef();

    this.state = {
      ingredients: "",
      isButtonDisabled: true
    };
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }
  // onSearchInputChange = event => {
  //   console.log("Search: " + event.target.value);
  //   this.state.isButtonDisabled = false;
  //   //console.log(this.state.isButtonDisabled);
  // };

  handleSearch = event => {
    let value = this.search.current.value;
    let updated = Object.assign({}, this.state.ingredients);

    updated = value;
    //updated = value.split(",").join("%2C");
    //console.log(updated);

    this.setState({
      ingredients: updated
    });
  };

  // onSubmitHandler = event => {
  //   console.log("Search onsubmit");
  // };

  handleSubmitSearch = event => {
    event.preventDefault();

    this.props.fetchIngredients(this.state.ingredients);
    event.target.reset();
  };

  handleButtonClick = (e, name) => {
    //console.log("Click: " + name);
    let updated = Object.assign({}, this.state.fridge);

    if (!this.props.fridge.ingredients.includes(name)) {
      //console.log('***JJ***');
      this.props.addItem(name);
    }
  };

  render() {
    const { fetchedIngredients } = this.props.ingredients;
    let tempIngredients;

    //console.log("FetchedIngredients: ", fetchedIngredients);
    //console.log("fridge: ", this.props.fridge.ingredients);

    if (fetchedIngredients !== null) {
      tempIngredients = fetchedIngredients.map(item => {
        return (
          <Button
            name={item.name}
            item={item.name}
            key={item.item}
            onClick={(e) => {
              this.handleButtonClick(e, item.name)
            }}
            >
            {item.name}
          </Button>
        );
      });
    } else {
      tempIngredients = <p>no results.</p>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <br />
          {/* <TextField
            style={{ padding: 24 }}
            id="searchInput"
            placeholder="Search for Ingredients"
            margin="normal"
            onKeyUp={this.handleSearch}
            ref={this.search}
          /> */}
          <input ref={this.search} onKeyUp={this.handleSearch} />
          {/* <Button
            variant="contained"
            color="primary"
            //onClick={this.onSubmitHandler}
            //disabled={this.state.isButtonDisabled}
          >
            Search
          </Button> */}
          <button>Search for Ingredient</button>
          <br />
          {tempIngredients}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  fridge: state.fridge
});

export default connect(
  mapStateToProps,
  { fetchIngredients, addItem, deleteItem }
)(Search);
