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
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </div>
                    <div className="footerItem fontIconWrapper">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </div>
                    <div className="footerItem fontIconWrapper">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </div>
                </div>
                <div className="sitemapWrapper">
                    <div className="footerItemName">Site Map</div>
                    <div className="footerItem sitemapItem">About</div>
                    <div className="footerItem sitemapItem">Contact</div>
                </div>
                <div className="contactInfoWrapper">
                    <div className="footerItemName">Contact Info</div>
                    <div className="footerItem contactItem"><FontAwesomeIcon icon="phone" /> 12345678</div>
                    <div className="footerItem contactItem"><FontAwesomeIcon icon="map-marker-alt" /> address</div>
                    <div className="footerItem contactItem"><FontAwesomeIcon icon="envelope" /> email@email.com</div>
                </div>
            </div>
        </footer>
    );
};

export default footer;