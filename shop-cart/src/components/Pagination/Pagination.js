import React from 'react';
import './Pagination.css';
import PageItem from './PageItem/PageItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pagination = (props) => {
    const pages = [];
    for (let p = 0; p < props.totalAmountPage; p++) {
        pages.push(<PageItem key={(p+1)} page={(p+1)}></PageItem>);
    }

    return (
        <div className="pageWrapper">
            <div className="pageItem"><FontAwesomeIcon icon="caret-left" /></div>
            { pages }
            <div className="pageItem"><FontAwesomeIcon icon="caret-right" /></div>
        </div>
    );
};

export default pagination;