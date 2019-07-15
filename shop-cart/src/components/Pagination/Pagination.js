import React from 'react';
import './Pagination.css';
import PageItem from './PageItem/PageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pagination = (props) => {
    const pages = [];
    for (let p = 0; p < props.amountOfPage; p++) {
        pages.push(<PageItem key={(p+1)} page={(p+1)}></PageItem>);
    }

    const pageLeft = (props.amountOfPage > 5) ?
        <div className="pageItem"><FontAwesomeIcon icon="caret-left" /></div> : null;

    const pageRight = (props.amountOfPage > 5) ?
        <div className="pageItem"><FontAwesomeIcon icon="caret-right" /></div> : null;

    return (
        <div className="pageWrapper">           
            {pageLeft}
            {pages}
            {pageRight}
        </div>
    );
};

export default pagination;