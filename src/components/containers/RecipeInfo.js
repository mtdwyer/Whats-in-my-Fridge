// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Recipe } from "../views";

// import { getClickedRecipe } from "../../actions";

// import Spinner from "../../common/Spinner";

// class RecipeInfo extends Component {
//   componentDidMount() {
//     console.log(this.props.match.params.id);
//     this.props.getClickedRecipe(this.props.match.params.id);
//   }

//   render() {
//     let { clickedRecipe } = this.props.recipes;

//     let selectedRecipe;

//     if (clickedRecipe === null) {
//       selectedRecipe = <Spinner />;
//     } else {
//       selectedRecipe = <Recipe item={clickedRecipe} />;
//       console.log(selectedRecipe);
//     }

//     return <div>{selectedRecipe}</div>;
//   }
// }

// const mapStateToProps = state => ({
//   recipes: state.recipes
// });

// export default connect(
//   mapStateToProps,
//   { getClickedRecipe }
// )(RecipeInfo);
