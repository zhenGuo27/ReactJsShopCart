import React from 'react';

const categoryItem = (props) => {
   const className = (props.name === "All")? "cItem categoryItemActive": "cItem";
   return(
      <li id={props.id} className={className} onClick={props.filterClick}>{props.name}</li>
    );
};

export default categoryItem;