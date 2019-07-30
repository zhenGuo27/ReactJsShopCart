import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = (props) => {
    return (
        <footer>
            <div className="footerWrapper">
                <div className="socialMediaWrapper">
                    <div className="footerItemName">Social Media</div>
                    <div className="footerItem fontIconWrapper">
                        <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className="footerItem fontIconWrapper">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="footerItem fontIconWrapper">
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div className="sitemapWrapper">
                    <div className="footerItemName">Site Map</div>
                    <div className="footerItem sitemapItem">About</div>
                    <div className="footerItem sitemapItem">Contact</div>
                </div>
                <div className="contactInfoWrapper">
                    <div className="footerItemName">Contact Info</div>
                    <div className="footerItem contactItem"><i className="fas fa-phone"></i> 12345678</div>
                    <div className="footerItem contactItem"><i className="fas fa-map-marker-alt"></i> address</div>
                    <div className="footerItem contactItem"><i className="fas fa-envelope"></i> email@email.com</div>
                </div>
            </div>
        </footer>
    );
};

export default footer;