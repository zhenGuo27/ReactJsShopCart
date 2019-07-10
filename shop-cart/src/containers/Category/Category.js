import React from 'react';
import CategoryItems from './CategoryItem/CategoryItem';

const category = (props) => {
    const items = [];
    Object.keys(props).map((igKey, index) => {
        let liEle = null;
        let itemTemp = [];
        items.push(<li className="categoryName" key={props[igKey].name}>{props[igKey].name}</li>);
        for (let j = 0; j < props[igKey].item.length; j++) {
            itemTemp.push(<CategoryItems key={props[igKey].item[j].name} name={props[igKey].item[j].name}></CategoryItems>);
        }
        liEle = <li key={props[igKey].name + "itemWrapper"}><ul className="itemWrapper"> {itemTemp} </ul></li>;
        items.push(liEle);
    });

    return (
        <ul className="categoryWrapper">
            {items}
        </ul>
    );
};

export default category;