import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function Fridge(props) {
  let tempArray;

  console.log(props.item);

  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          The Fridge
        </Typography>
        <button>click me</button>
        {
          //if (this.props.fridge.ingredients.length>0)
          //{
          // (tempArray = this.props.fridge.ingredients.map((item, index) => {
          //   return <Button variant="outlined">{props.item}</Button>;
          // }))
          //}
        }
        {/* <span>{props.item}</span> */}
      </CardContent>
    </Card>
  );
}

export default Fridge;
