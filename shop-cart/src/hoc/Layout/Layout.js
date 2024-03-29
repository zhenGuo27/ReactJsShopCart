import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/FIlter';
import Aside from '../../components/Aside/Aside';
import List from '../../containers/List/List';
import SmallDeviceWrapper from '../../components/SmallDeviceWrapper/SmallDeviceWrapper';
import Footer from '../../components/Footer/Footer';
import axios from '../../axios-orders';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import { Route } from 'react-router-dom';

import SectionList from '../../components/SectionList/SectionList';
import Banner from '../../components/Banner/Banner';
import Product from '../../containers/Product/Product';

let dbProduct = null;

class Layout extends Component {
  state = {
    category: [],
    searchKeyword: '',
    filterKeyword: '', // pass it to List to filter product
    filterCategoryItem: 0,
    sectionList: []
  }

  componentDidMount() {
    axios.get('category.json')
      .then(reponse => {
        const categoryData = { ...reponse.data };
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

    axios.get('sectionList.json')
      .then(reponse => {
          const listData = { ...reponse.data };
          let dbSectionList = [];
          Object.keys(listData)
              .map(igKey => {
                  listData[igKey].items.forEach((element, i, array) => {
                      // element: 單一個陣列的值
                      // i: 陣列的索引值 0, 1, 2, ...
                      // array: 傳入的陣列本體
                      dbSectionList.push(element);                      
                  });
              });
            this.setState({sectionList: dbSectionList});
      })
      .catch(error => {
          console.log("Section List Get error", error);
      });
  }

  searchOnchange = (event) => {
    this.setState({ searchKeyword: event.target.value });
  }

  seachHandler = (event) => {
    let keyword = this.state.searchKeyword;
    this.setState({ filterKeyword: keyword });
  }

  searchCategoryHandler = (event) => {
    this.setState({ filterCategoryItem: event.target.id });
    let x = document.querySelectorAll(".cItem");
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].className = "cItem";
    }
    event.target.className = "cItem categoryItemActive";
  }

  render() {
    let category = [...this.state.category];
    let sectionList = [...this.state.sectionList];

    return (
      <Aux>
        <div className="stickyFooterContent">
          <Header></Header>
          <main className="mainWrapper">
            <Route path="/" exact component={SlickSlider}></Route>
            <Route path="/" exact component={() => <SectionList sectionData={sectionList} />}></Route>

            <Route path="/list" render={() => {
              return (
                <SmallDeviceWrapper>
                  <Search keyword={this.state.searchKeyword} click={this.seachHandler} change={this.searchOnchange}></Search>
                </SmallDeviceWrapper>
              );
            }}>
            </Route>
            <Route path="/list" render={() => {
              return (
                <List filterKeyword={this.state.filterKeyword} filterCategoryItem={this.state.filterCategoryItem}></List>
              );
            }}>
            </Route>
            <Route path="/list" render={() => {
              return (
                <Aside>
                  <Search keyword={this.state.searchKeyword} click={this.seachHandler} change={this.searchOnchange}></Search>
                  <Filter category={category} filterClick={this.searchCategoryHandler}></Filter>
                </Aside>
              );
            }}>
            </Route>

            <Route path="/" exact component={Banner}></Route>
            <Route path="/product/:productId" exact component={Product}></Route>
          </main>
        </div>
        <Footer></Footer>
      </Aux>
    )
  }
}

export default Layout;