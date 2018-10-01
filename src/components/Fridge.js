import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper'
import { connect } from "react-redux";
import { addItem, deleteItem, fetchRecipes, fetchMoreRecipes } from "../actions";

class Fridge extends Component {
  state = {
    isButtonDisabled: false
  };
  handleDeleteItem = item => {
    //console.log(item);

    this.props.deleteItem(item);
  };

  handleScroll = (e) => {
 
    let lastRecipe = document.querySelector('div.recipeDiv:last-child')
    let lastRecipeOffset = lastRecipe.offsetTop + lastRecipe.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;

    if (pageOffset > lastRecipeOffset - bottomOffset) {
      this.props.fetchMoreRecipes();
    }
  }


  handleRecipeSearch = event => {
    //console.log("this Fridge: ", this.props.fridge.ingredients);
    event.preventDefault();
    this.props.fetchRecipes(this.props.fridge.ingredients);
    //console.log("Fetched Recipes: ", this.props.recipes.fetchedRecipes);

    this.scrollListener = window.addEventListener('scroll', (e) => {
      if ((document.querySelector('div.recipeDiv:last-child')) !== null){
        this.handleScroll(e)
      }

    })
  };

  render() {
    //console.log('-----');
    //console.log('From Fridge: ');
    //console.log(this.props);
    //console.log('-----');
    let items;
    if (this.props.fridge.ingredients.length > 0) {
      this.state.isButtonDisabled = false;
    } else this.state.isButtonDisabled = true;
    // return (
    //   <Card>
    //     <CardContent>
    //       <Typography variant="headline" component="h2">
    //         The Fridge
    //       </Typography>
    //       {
    //         (items = this.props.fridge.ingredients.map((item, index) => {
    //           return (
    //             <Button
    //               variant="outlined"
    //               onClick={this.handleDeleteItem.bind(this, item)}>
    //               {item}
    //             </Button>
    //           );
    //         }))
    //       }
    //       <br />
    //       <Button
    //         variant="raised"
    //         disabled={this.state.isButtonDisabled}
    //         color="primary"
    //         onClick={this.handleRecipeSearch}>
    //         Search Recipes
    //       </Button>
    //     </CardContent>
    //   </Card>
    // );
    return (
      <Paper elevation={12}>
        <Typography variant="headline" component="h2">
          The Fridge
        </Typography>
        <br />
        {
          (items = this.props.fridge.ingredients.map((item, index) => {
            return (
              <Button
                variant="outlined"
                onClick={this.handleDeleteItem.bind(this, item)}>
                {item}
              </Button>
            );
          }))
        }
        <br />
        <br />
        <Button
          variant="raised"
          disabled={this.state.isButtonDisabled}
          color="primary"
          onClick={this.handleRecipeSearch}>
          Search Recipes
        </Button>
        <br />
        &nbsp;
      </Paper>

      // <Card>
      //   <CardContent>
      //     <Typography variant="headline" component="h2">
      //       The Fridge
      //     </Typography>
      //     {
      //       (items = this.props.fridge.ingredients.map((item, index) => {
      //         return (
      //           <Button
      //             variant="outlined"
      //             onClick={this.handleDeleteItem.bind(this, item)}>
      //             {item}
      //           </Button>
      //         );
      //       }))
      //     }
      //     <br />
      //     <Button
      //       variant="raised"
      //       disabled={this.state.isButtonDisabled}
      //       color="primary"
      //       onClick={this.handleRecipeSearch}>
      //       Search Recipes
      //     </Button>
      //   </CardContent>
      // </Card>
    );
  }
}

const mapStateToProps = state => ({
  fridge: state.fridge,
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem, fetchRecipes, fetchMoreRecipes }
)(Fridge);
