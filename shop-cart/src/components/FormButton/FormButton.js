import React from 'react';
import './FormButton.css';

const formButton = (props) => {
   return (
       <button className="formButton" type="button" onClick={(event) => props.click(event)}>{props.name}</button>
   );
};

export default formButton;