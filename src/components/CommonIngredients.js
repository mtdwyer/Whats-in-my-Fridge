import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Item } from './views';
import { addItem, deleteItem } from '../actions';
import Fridge from './Fridge.1';

let printIngredients;
const commonIngredients = ['eggs', 'milk', 'sugar', 'flour', 'beef', 'pork', 'chicken'];

class CommonIngredients extends Component {
  state = {
    isDisabled: false
  };

  handleClick = (e, name) => {
    console.log('Click: ' + name);
    //this.state.disabled = !this.state.disabled;
    let updated = Object.assign({}, this.state.fridge);

    if (!this.props.fridge.ingredients.includes(name)) {
      //console.log('***JJ***');
      this.props.addItem(name);
    }

    //this.setState({});
    //console.log('Update: ' + updated);
  };

  render() {
    //console.log(this.props);
    let items;

    // if (this.props.fridge.ingredients.length > 0) {
    //   console.log('----Push Into Array----');

    //   items = this.props.fridge.ingredients.map((item, index) => {
    //     return <Fridge item={item} key={index} />;
    //   });
    // } else {
    //   items = '';
    // }

    return (
      <div id='commonIngredients'>
        {
          (printIngredients = commonIngredients.map(item => {
            return (
              <div>
                <Button
                  onClick={(e) => {
                    this.handleClick(e, item)
                  }}
                  name={item}
                  variant="outlined"
                  color="primary"
                  //disabled={this.state.isDisabled}
                >
                  {item}
                </Button>
                {items}
              </div>
            );
          }))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fridge: state.fridge
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem }
)(CommonIngredients);
