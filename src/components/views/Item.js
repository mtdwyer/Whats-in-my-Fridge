import React, { Component } from "react";

const Item = props => {
  return (
    <div>
      <span>{props.item.name}</span>
    </div>
  );
};

export default Item;
