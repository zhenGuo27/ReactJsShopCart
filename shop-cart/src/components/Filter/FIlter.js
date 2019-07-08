import React from 'react';
import './Filter.css';
import Category from '../Category/Category';

const filter = (props) => {
    let categoryData = {
        "categories": [
            {
                "name": "category1",
                "item": ["item1", "item2"]
            },
            {
                "name": "category2",
                "item": ["item1", "item2", "item3", "item4", "item5"]
            },
            {
                "name": "category3",
                "item": ["item1", "item2", "item3"]
            }
        ]
    };

    return (
        <div className="filterWrpper">
            <Category amount="3" {...categoryData}></Category>
        </div>
    );
};

export default filter;