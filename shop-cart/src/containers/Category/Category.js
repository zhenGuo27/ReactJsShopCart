import React from 'react';
import CategoryItems from './CategoryItem/CategoryItem';

const category = (props) => {
    const items = [];
    Object.keys(props).map((igKey, index) => {        
        props[igKey].forEach((element, i, array) => {
            // element: 單一個陣列的值
            // i: 陣列的索引值 0, 1, 2, ...
            // array: 傳入的陣列本體
            let liEle = null;
            let itemTemp = [];
            items.push(<li className="categoryName" key={element.name}>{element.name}</li>);
            for (let j = 0; j < element.item.length; j++) {
                itemTemp.push(<CategoryItems key={element.item[j].name} name={element.item[j].name}></CategoryItems>);
            }
            liEle = <li key={element.name + "itemWrapper"}><ul className="itemWrapper"> {itemTemp} </ul></li>;
            items.push(liEle);
        });
    });

    return (
        <ul className="categoryWrapper">
            {items}
        </ul>
    );
};

export default category;