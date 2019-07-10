import React from 'react';
import './List.css';
import ListItems from './ListItem/ListItem';
import Pagination from '../../components/Pagination/Pagination';

const list = (props) => {
    let listItems = [];
    Object.keys(props).map((igKey, index) => {   
        listItems.push(<ListItems key={props[igKey].name} name={props[igKey].name} img={props[igKey].img} price={props[igKey].price}></ListItems>);  
    });
    
    return (
        <div className="listWrapper">
            {listItems}
            <Pagination totalAmountPage="5"></Pagination>
        </div>
    );
};

export default list;