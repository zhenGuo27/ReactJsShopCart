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
            <div><FontAwesomeIcon icon="angle-double-left" /></div>
            { pages }
            <div><FontAwesomeIcon icon="angle-double-right" /></div>
        </div>
    );
};

export default pagination;