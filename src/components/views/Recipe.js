import React, { Component } from 'react';

const Recipe = (props) => {
    return (
        <div style={{float: 'left', height: 500, width: 500}}>
            <img src={props.item.image} />
            <br />
            <span>{props.item.title}</span>
            <br />
            <span>{props.item.usedIngredientCount}</span>
            <br />
            <span>Likes: {props.item.aggregateLikes}</span>
            <br />
            <span>Time: {props.item.preparationMinutes} minutes</span>
            <br />
            <span>Vegan: {props.item.vegan}</span>
            <br />
            <span>Directions: {props.item.instructions}</span>
            <br />
        </div>
    )
}

export default Recipe