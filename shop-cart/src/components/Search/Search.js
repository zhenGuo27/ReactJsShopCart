import React from 'react';
import './Search.css';
import FormButton from '../FormButton/FormButton';

const search = (props) => {
    return (
        <div className="searchWrapper">
           <input type="text"  name="searchInput"/>
           <FormButton name="Search"></FormButton>
        </div>
    );
};

export default search;