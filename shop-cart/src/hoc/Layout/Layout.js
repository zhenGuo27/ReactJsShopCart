import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/FIlter';
import Aside from '../../components/Aside/Aside';
import List from '../../containers/List/List';
import SmallDeviceWrapper from '../../components/SmallDeviceWrapper/SmallDeviceWrapper';
import axios from '../../axios-orders';

class Layout extends Component {
 
/*     componentDidMount(){
      const category = {
        category: [
          {
            category: 1,
            name: "Category1",
            item: [
              {
                id: 1,
                name: 'item1-1'
              },
              {
                id: 2,
                name: 'item1-2'
              },
              {
                id: 3,
                name: 'item1-3'
              }
            ]
          },
          {
            category: 2,
            name: "Category2",
            item: [
              {
                id: 1,
                name: 'item2-1'
              },
              {
                id: 2,
                name: 'item2-2'
              },
              {
                id: 3,
                name: 'item2-3'
              }
            ]
          },
          {
            category: 3,
            name: "Category3",
            item: [
              {
                id: 1,
                name: 'item3-1'
              },
              {
                id: 2,
                name: 'item3-2'
              },
              {
                id: 3,
                name: 'item3-3'
              }
            ]
          },
          {
            category: 4,
            name: "Category4",
            item: [
              {
                id: 1,
                name: 'item4-1'
              },
              {
                id: 2,
                name: 'item4-2'
              },
              {
                id: 3,
                name: 'item4-3'
              }
            ]
          },
          {
            category: 5,
            name: "Category5",
            item: [
              {
                id: 1,
                name: 'item5-1'
              },
              {
                id: 2,
                name: 'item5-2'
              },
              {
                id: 3,
                name: 'item5-3'
              }
            ]
          },
          {
            category: 6,
            name: "Category6",
            item: [
              {
                id: 1,
                name: 'item6-1'
              },
              {
                id: 2,
                name: 'item6-2'
              },
              {
                id: 3,
                name: 'item6-3'
              }
            ]
          }
        ]
      };

      axios.post('category.json', category)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  } */

  state = {
    category: null
  }

  componentDidMount(){
    axios.get('category.json')
         .then(reponse=> {
            //console.log("Category Get Data", reponse.data);
            this.setState({category: reponse.data});
         })
         .catch(error=> {
             console.log("Category Get error", error);
         })
 }

  render() {
    const categoryData = {...this.state.category};

    let category = [];
    Object.keys(categoryData)
      .map(igKey => {
        category = { ...categoryData[igKey] };
      });

    return (
      <Aux>
        <Header></Header>
        <div className="mainWrapper">
          <SmallDeviceWrapper>
            <Search></Search>
            <Filter {...category}></Filter>
          </SmallDeviceWrapper>
          <List></List>
          <Aside>
            <Search></Search>
            <Filter {...category}></Filter>
          </Aside>
        </div>
      </Aux>
    )
  }
}

export default Layout;