import React from 'react';
import './ListItem.css';

const listItems = (props) => {
    return (
        <div className="listItem">
            <img src={props.img} alt={props.name}/>
            <div className="name">{props.name}</div>
            <div className="price">{props.price}</div>
        </div>
    );   
};

export default listItems;