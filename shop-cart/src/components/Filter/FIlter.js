import React from 'react';
import './Filter.css';
import Category from '../../containers/Category/Category';

const filter = (props) => {    
    return (
        <div className="filterWrpper">
            <Category {...props}></Category>   
        </div>
    ); 
};

export default filter; 


