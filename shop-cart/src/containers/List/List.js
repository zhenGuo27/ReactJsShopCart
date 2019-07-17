import React, { Component } from 'react';
import './List.css';
import ListItems from './ListItem/ListItem';
import Pagination from '../../components/Pagination/Pagination';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders'

let dbProduct = null;

class List extends Component {
    state = {
        productForRender: null,
        searchKeyword: "",
        searchCategory: 0,
        amountOfPage: 0
    }

    componentDidMount() {
        this.setState({searchKeyword: this.props.filterKeyword});
        this.setState({searchCategory: this.props.filterCategoryItem});

        axios.get('product.json')
            .then(reponse => {
                const productData = { ...reponse.data };
                let product = [];
                Object.keys(productData)
                    .map(igKey => {
                        productData[igKey].products.forEach((element, i, array) => {
                            // element: 單一個陣列的值
                            // i: 陣列的索引值 0, 1, 2, ...
                            // array: 傳入的陣列本體
                            product.push(element);
                        });
                    });
                dbProduct = product;
                this.setState({ productForRender: product });
                this.getAmountOfPage(product.length);
            })
            .catch(error => {
                console.log("product Get error", error);
            });
    }

    componentWillReceiveProps(nextProps){        
        this.setState({ searchKeyword: nextProps.filterKeyword });
        const searchKw = this.state.searchKeyword;

        //search keyword 
        if (searchKw != nextProps.filterKeyword) {
            let filterProduct = dbProduct.filter(function (item, index, array) {
                return item.name.indexOf(nextProps.filterKeyword) != -1;
            });
            this.setState({ productForRender: filterProduct });
            this.getAmountOfPage(filterProduct.length);
        } else { // search category item
            this.setState({ searchCategory: nextProps.filterCategoryItem });
            const searchCategory = this.state.searchCategory;

            if (searchCategory != nextProps.filterCategoryItem && nextProps.filterCategoryItem != 0) {
                let filterProduct = dbProduct.filter(function (item, index, array) {
                    return item.categoryItem == nextProps.filterCategoryItem;
                });
                this.setState({ productForRender: filterProduct });
                this.getAmountOfPage(filterProduct.length);
            } else if (dbProduct != null && searchCategory == 0 || 
                       dbProduct != null && nextProps.filterCategoryItem == 0) {
                this.setState({ productForRender: dbProduct });
                this.getAmountOfPage(dbProduct.length);
            } else {
                this.setState({ productForRender: [] });
                this.getAmountOfPage(0);
            }
        }
    }

    getAmountOfPage = (len) => {
        let amountOfPage = 0;
        let dividePage = len / 6;
        let modPage = len % 6;
        amountOfPage = (modPage == 0) ? parseInt(dividePage, 10) : parseInt(dividePage + 1, 10);
        this.setState({amountOfPage: amountOfPage});
    }

    render() {    
        let productData = { ...this.state.productForRender };
        let listItems = [];
        let hiddenImg = "";

        Object.keys(productData).map((igKey, index) => {
            hiddenImg = productData[igKey].img;
            listItems.push(<ListItems key={productData[igKey].name} name={productData[igKey].name} img={productData[igKey].img} price={productData[igKey].price}></ListItems>);
        });       

        if (listItems.length % 3 !== 0) {
            let name = "";
            let listItemsLen = listItems.length;
            for (let a = 0; a < (3 - listItemsLen % 3); a++) {
                name = "hidden" + (a + 1);
                listItems.push(<ListItems key={name} name={name} img={hiddenImg} price="0"></ListItems>);
            }
        }

        if (listItems.length == 0) {
            listItems.push(<div key="noMatch" className="noMatchItem">No result</div>)
        }

        return (
            <Aux>
                <div className="listWrapper">
                    {listItems}
                </div>
                <Pagination amountOfPage={this.state.amountOfPage}></Pagination>
            </Aux>
        );
    }
}

export default List;





/* const list = (props) => {
    let listItems = [];
    let hiddenImg = "";
    Object.keys(props).map((igKey, index) => {
        hiddenImg = props[igKey].img;
        listItems.push(<ListItems key={props[igKey].name} name={props[igKey].name} img={props[igKey].img} price={props[igKey].price}></ListItems>);
    });

    let amountOfPage = 0;
    let dividePage = listItems.length / 6;
    let modPage = listItems.length % 6;
    amountOfPage = (modPage == 0) ? dividePage : (dividePage + 1);

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
            <Pagination amountOfPage={amountOfPage}></Pagination>
        </Aux>
    );
};

export default list; */