import React from 'react';
import './ListItem.css';

const listItems = (props) => {
    let className = "listItem";
    if(props.name.indexOf("hidden")!=-1){
        className+= " hiddenItem";
    }

    return (
        <div className={className}>
            <img src={props.img} alt={props.name}/>
            <div className="name">{props.name}</div>
            <div className="price">{props.price}</div>
        </div>
    );   
};

export default listItems;