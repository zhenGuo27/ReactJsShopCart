import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const header = (props) => {
    let navItems = [
        {
            name: "About",
            dropdown: false          
        },
        {
            name: "Category",
            dropdown: true
        },
        {
            name: "Contact",
            dropdown: false
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