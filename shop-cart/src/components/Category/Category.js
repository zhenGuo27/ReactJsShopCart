import React from 'react';
import CategoryItems from './CategoryItem/CategoryItem';

const category = (props) => {
    const items = [];
    for (let i = 0; i < props.amount; i++) {
        let liEle = null;
        let itemTemp = [];
        items.push(<li className="categoryName" key={props.categories[i].name}>{props.categories[i].name}</li>);
        for (let j = 0; j < props.categories[i].item.length; j++) {
            itemTemp.push(<CategoryItems key={props.categories[i].item[j]} name={props.categories[i].item[j]}></CategoryItems>);
        }
        liEle = <li key={props.categories[i].name +　"itemWrapper"}><ul className="itemWrapper"> {itemTemp} </ul></li>;
        items.push(liEle);
    }

    return (
        <ul className="categoryWrapper">
            {items}
        </ul>
    );
};

export default category;