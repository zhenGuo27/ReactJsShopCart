import React from 'react';
import './ListItem.css';
import { Route } from 'react-router-dom'

const listItems = (props, context) => {
    let className = "listItem";
    if(props.name.indexOf("hidden")!==-1){
        className+= " hiddenItem";
    }

    return (
        <Route render={({ history}) => (
            <div className={className} onClick={(event)=> history.push('/product/' + props.id)}>
                <img src={props.img} alt={props.name}/>
                <div className="name">{props.name}</div>
                <div className="price">{props.price}</div>
            </div>
          )} />        
    );   
};

export default listItems;