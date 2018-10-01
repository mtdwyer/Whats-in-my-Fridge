import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
    return (
        <div className='recipes' style={{float: 'left', height: 500, width: 500}}>
            <Link to={`recipe/${props.item.id}`} ><img src={props.item.image} /></Link>
            <br />
            <span>{props.item.title}</span>
            <br />
            <span>Used ingredients: {props.item.usedIngredientCount}</span>
            <br />
            <span>Missed ingredients: {props.item.missedIngredientCount}</span>
        </div>
    )
}

export default Results;