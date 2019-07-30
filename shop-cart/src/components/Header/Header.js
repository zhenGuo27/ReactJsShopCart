import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div className="mobileMenu"><i className="fas fa-bars"></i></div>
                <div className="logo"><Link to="/">Logo</Link></div>
                <Navigation navItems={navItems}></Navigation>
            </div>
        </header>
    );
};

export default header;