import React from 'react';

const categoryItem = (props) => {
   return(
      <li id={props.id} onClick={props.filterClick}>{props.name}</li>
    );
};

export default categoryItem;