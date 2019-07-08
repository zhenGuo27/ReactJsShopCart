import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const header = (props) => {
    let navItems = [
        {
            name: "item1"          
        },
        {
            name: "item2"
        },
        {
            name: "item3"
        },
        {
            name: "item4"
        }
    ];

    return (
        <header>
            <div>
                <div className="logo">Logo</div>
                <Navigation navItems={navItems}></Navigation>
            </div>
        </header>
    );
};

export default header;