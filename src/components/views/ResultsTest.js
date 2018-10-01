import React, { Component } from "react";
import { Link } from "react-router-dom";

const ResultsTest = props => {
  return (
    <div style={{ float: "left", height: 500, width: 500 }}>
      {/* <Link to={`recipe/${props.item.id}`}>
        <img src={props.item.image} />
      </Link> */}
      <br />
      <h3>{props.item.title}</h3>

      <span>{props.item.title}</span>
      <br />
      {/* <span>Used ingredients: {props.item.usedIngredientCount}</span> */}
      <br />
      {/* <span>Missed ingredients: {props.item.missedIngredientCount}</span> */}
    </div>
  );
};

export default ResultsTest;
