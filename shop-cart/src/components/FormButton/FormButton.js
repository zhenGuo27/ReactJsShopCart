import React from 'react';
import './FormButton.css';

const formButton = (props) => {
   return (
       <button className="formButton" type="button">{props.name}</button>
   );
};

export default formButton;