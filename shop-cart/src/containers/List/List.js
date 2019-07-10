import React from 'react';
import './List.css';
import ListItems from './ListItem/ListItem';
import Pagination from '../../components/Pagination/Pagination';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const list = (props) => {
    let listItems = [];
    let hiddenImg = "";
    Object.keys(props).map((igKey, index) => {
        hiddenImg = props[igKey].img;
        listItems.push(<ListItems key={props[igKey].name} name={props[igKey].name} img={props[igKey].img} price={props[igKey].price}></ListItems>);
    });

    if (listItems.length % 3 !== 0) {
        let name = "";
        let listItemsLen = listItems.length;
        for (let a = 0; a < (3 - listItemsLen % 3); a++) {
            name = "hidden" + (a + 1);
            listItems.push(<ListItems key={name} name={name} img={hiddenImg} price="0"></ListItems>);
        }
    }

    return (
        <Aux>
            <div className="listWrapper">
                {listItems}
            </div>
            <Pagination totalAmountPage="5"></Pagination>
        </Aux>
    );
};

export default list;