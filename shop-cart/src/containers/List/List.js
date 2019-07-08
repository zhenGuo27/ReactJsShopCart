import React, { Component } from 'react';
import './List.css';
import ListItems from './ListItem/ListItem';
import Pagination from '../../components/Pagination/Pagination';

class List extends Component {
    state = {
        items: [
            {
                name: "item1",
                price: 100,
                img: "/images/1.jpg"
            },
            {
                name: "item2",
                price: 200,
                img: "/images/2.jpg"
            },
            {
                name: "item3",
                price: 300,
                img: "/images/3.jpg"
            },
            {
                name: "item4",
                price: 400,
                img: "/images/4.jpg"
            },
            {
                name: "item5",
                price: 500,
                img: "/images/5.jpg"
            },
            {
                name: "item6",
                price: 600,
                img: "/images/6.jpg"
            }
        
        ]
    }

    render() {
        let listItems = this.state.items.map((item) => {
            return <ListItems key={item.name} name={item.name} img={item.img} price={item.price}></ListItems>
        });

        return (
            <div className="listWrapper">
                {listItems}
                <Pagination totalAmountPage="5"></Pagination>
            </div>
        );
    }
}

export default List;