import React from 'react';
import './Search.css';
import FormButton from '../FormButton/FormButton';

const search = (props) => {
    return (
        <div className="searchWrapper">
           <input type="text"  name="searchInput" value={props.keyword} onChange={(event) => props.change(event)} />
           <FormButton name="Search" click={props.click}></FormButton>
        </div>
    );
};

export default search;