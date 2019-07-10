import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/FIlter';
import Aside from '../../components/Aside/Aside';
import List from '../../containers/List/List';
import SmallDeviceWrapper from '../../components/SmallDeviceWrapper/SmallDeviceWrapper';
import axios from '../../axios-orders';

let dbProduct = null;

class Layout extends Component {
  state = {
    category: null,
    searchKeyword: '',
    productForRender: null
  }

  componentDidMount() {
    axios.get('category.json')
      .then(reponse => {
        const categoryData = {... reponse.data};
        let category = [];
        Object.keys(categoryData)
          .map(igKey => {
            categoryData[igKey].category.forEach((element, i, array) => {
              // element: 單一個陣列的值
              // i: 陣列的索引值 0, 1, 2, ...
              // array: 傳入的陣列本體
              category.push(element);
            });
          });
        this.setState({ category: category });
      })
      .catch(error => {
        console.log("Category Get error", error);
      });

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
      })
      .catch(error => {
        console.log("product Get error", error);
      });
  }

  searchOnchange = (event) => {
    console.log("searchOnchange", event.target.value);
    this.setState({ searchKeyword: event.target.value });
  }

  seachHandler = (event) => {
    let product = [];
    let productData = { ...dbProduct };
    let keyword = this.state.searchKeyword;

    Object.keys(productData).map((igKey, index) => {
      product.push(productData[igKey]);
    });

    let filterProduct = product.filter(function (item, index, array) {
      return item.name.indexOf(keyword) != -1;
    });

    this.setState({ productForRender: filterProduct });
  }

  render() {
    let category = {... this.state.category};  
    let product = { ...this.state.productForRender };

    return (
      <Aux>
        <Header></Header>
        <div className="mainWrapper">
          <SmallDeviceWrapper>
            <Search keyword={this.state.searchKeyword} click={this.seachHandler} change={this.searchOnchange}></Search>
            <Filter {...category}></Filter>
          </SmallDeviceWrapper>
          <main>
            <List {...product}></List>
          </main>
          <Aside>
            <Search keyword={this.state.searchKeyword} click={this.seachHandler} change={this.searchOnchange}></Search>
            <Filter {...category}></Filter>
          </Aside>
        </div>
      </Aux>
    )
  }
}

export default Layout;