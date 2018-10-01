import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import samplePic from "../../assets/images/sudo-rm.gif";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/index";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140

    //objectFit: "cover"
  }
};

const RecipeResultCard = props => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea justify="center" onClick={this.handleCardClick}>
        <CardMedia
          className={classes.media}
          image={props.data.image}
          title="Sudo rm"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.data.title}
          </Typography>
          <Typography component="p">
            Matching Ingredient Count: {props.data.usedIngredientCount} <br/>
            Missing Ingredient Count: {props.data.missedIngredientCount}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(RecipeResultCard);

// export default connect(
//   mapStateToProps,
//   { fetchRecipes }
// )(RecipeResultCard);

// const mapStateToProps = state => ({
//   recipes: state.recipes,
//   fridge: state.fridge
// });

// export default withStyles(styles)(
//   connect(
//     mapStateToProps,
//     { fetchRecipes }
//   )(RecipeResultCard)
// );
