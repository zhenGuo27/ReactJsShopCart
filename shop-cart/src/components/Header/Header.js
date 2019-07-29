import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Route, Link } from 'react-router-dom';

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
                <div className="logo"><Link to="/">Logo</Link></div>
                <Navigation navItems={navItems}></Navigation>
            </div>
        </header>
    );
};

export default header;