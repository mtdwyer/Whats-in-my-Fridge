import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import samplePic from "../../assets/images/sudo-rm.gif";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140

    //objectFit: "cover"
  }
};
//const { classes } = props;

class RecipeResultCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Pic Src: ", this.props.recipes.fetchedRecipes.image);
    return (
      <Card /* className={classes.card} */>
        <CardActionArea justify="center">
          <CardMedia
            /*             className={classes.media}
 */

            src={this.props.recipes.fetchedRecipes.image}
            title="Sudo rm"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.recipes.fetchedRecipes.title}
            </Typography>
            <Typography component="p">
              Missing Ingredient Count:{" "}
              <span>
                {this.props.recipes.fetchedRecipes.missedIngredientCount}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(ResultCard);

// export default connect(
//     mapStateToProps,
//     { fetchRecipes }
//   )(SearchRecipes);

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { fetchRecipes }
  )(RecipeResultCard)
);
