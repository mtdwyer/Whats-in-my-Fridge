import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Modal from "@material-ui/core/Modal";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//import ResultCardSample from "../views/ResultCardSample";
import RecipeResultCard from "../views/RecipeResultCard";
//import RecipeResultCardv2 from "../views/RecipeResultCardv2";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  addItem,
  deleteItem,
  fetchRecipes,
  getClickedRecipe
} from "../../actions";

// ***************
//Material UI settings
// ***************
const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: "80%"
  }
});
const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  //const top = 50 + rand();
  const top = 2;
  const left = 10;
  return {
    top: `${top}%`,
    left: `${left}%`
    //transfrom: `translate(-${top}%, -${left}%)`
  };
};

// ***************
//Other Stylings and Variables
// ***************
const imageStyle = {
  height: "100px",
  width: "auto"
};
let returnedRecipes;
let id = null;
let rows = [];
let cd;
// ***************
//Results Class
// ***************
class Results extends Component {
  state = {
    open: false,
    recipeID: null
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
    this.setState({ recipeID: null });
  };

  // createData(ingredient, amount) {
  //   tableID += 1;
  //   return { id, ingredient, amount };
  // }

  handleCardClick(item) {
    id = item.id;
    this.state.recipeID = item.id;

    console.log("Clicked Card ID: ", id);
    console.log("ClickedRecipe: ", this.props.recipes.clickedRecipe);

    this.state.open = !this.state.open;
    this.props.getClickedRecipe(id);

    let tableID = 0;
    let tempArr = [];

    // this.props.recipes.extendedIngredients.map(item => {
    //   let createData = (name, ingredient) => {
    //     name = item.name;
    //     ingredient = item.id;
    //     tableID += 1;
    //     return id, name, ingredient;
    //   };
    //   rows.push(createData);
    // });
  }

  render() {
    const { classes } = this.props;
    console.log("***", this.state.open, this.state.recipeID);
    if (this.state.open && this.props.recipes.clickedRecipe) {
      return (
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          onEscapeKeyDown={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          <div style={getModalStyle()} className={classes.paper}>
            <style>
              {`
                table, th{
                  border: 1px solid black;
                }
                
              `}
            </style>
            <Typography variant="title" id="modal-title" align="center">
              <img
                src={this.props.recipes.clickedRecipe.image}
                style={imageStyle}
              />
              <br />
              {this.props.recipes.clickedRecipe.title}
            </Typography>

            <table>
              <tr>
                <th>Ingredient</th>
                <th>Amount</th>
              </tr>
              {
                (rows = this.props.recipes.clickedRecipe.extendedIngredients.map(
                  item => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td style={{ textAlign: "right" }}>
                          {item.amount} {item.unit}
                        </td>
                      </tr>
                    );
                  }
                ))
              }
            </table>

            {/* <Table className={classes.root}>
              <TableHead>
                <TableRow>
                  <TableCell>Ingredient</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {
                          this.props.recipes.clickedRecipe.extendedIngredients
                            .name
                        }
                      </TableCell>
                      <TableCell numeric>
                        {
                          this.props.recipes.clickedRecipe.extendedIngredients
                            .id
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table> */}

            <Typography variant="body1" />
            <Typography variant="body1" id="simple-modal-description">
              <strong>Preparation Time:</strong>{" "}
              {this.props.recipes.clickedRecipe.preparationMinutes}
              <br />
              <strong>Instructions:</strong>
              <br />
              {this.props.recipes.clickedRecipe.instructions}
            </Typography>
            <Typography variant="caption">
              SourceURL:&nbsp;
              <a href={this.props.recipes.clickedRecipe.sourceUrl}>
                {this.props.recipes.clickedRecipe.sourceUrl}{" "}
              </a>
              <br />
              SpoonacularURL:&nbsp;
              <a href={this.props.recipes.clickedRecipe.spoonacularSourceUrl}>
                {this.props.recipes.clickedRecipe.spoonacularSourceUrl}
              </a>
            </Typography>
          </div>
        </Modal>
      );
    }
    if (this.props.recipes.fetchedRecipes !== null) {
      returnedRecipes = this.props.recipes.fetchedRecipes.map((item, index) => {
        console.log("Item: ", item);
        return (
          <div className='recipeDiv'>
            <CardActionArea onClick={this.handleCardClick.bind(this, item)}>
              <RecipeResultCard data={item} key={index} />
            </CardActionArea>
          </div>
        );
      });
    } else returnedRecipes = <p />;

    return (
      <Paper elevation={12}>
        <Typography variant="headline" component="h2">
          Results
        </Typography>
        <Typography component="p">Where recipes can go.</Typography>
        <Grid container justify="center">
          {/* <Grid item>
          {[0, 1, 2].map(value => (
            <ResultCardSample />
          ))}
        </Grid> */}
          {returnedRecipes}
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  fridge: state.fridge,
  recipes: state.recipes
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { addItem, deleteItem, fetchRecipes, getClickedRecipe }
  )(Results)
);
