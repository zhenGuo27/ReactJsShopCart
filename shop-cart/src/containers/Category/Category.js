import React from 'react';
import CategoryItems from './CategoryItem/CategoryItem';

const category = (props) => {
    const items = [];
    Object.keys(props.category).map((igKey, index) => {
        let liEle = null;
        let itemTemp = [];
        items.push(<li className="categoryName" key={props.category[igKey].name}>{props.category[igKey].name}</li>);
        for (let j = 0; j < props.category[igKey].item.length; j++) {
            itemTemp.push(<CategoryItems key={props.category[igKey].item[j].name} name={props.category[igKey].item[j].name} id={props.category[igKey].item[j].id} filterClick={props.filterClick}></CategoryItems>);
        }
        liEle = <li key={props.category[igKey].name + "itemWrapper"}><ul className="itemWrapper"> {itemTemp} </ul></li>;
        items.push(liEle);
    });

    return (
        <ul className="categoryWrapper">
            {items}
        </ul>
    );
};

export default category;