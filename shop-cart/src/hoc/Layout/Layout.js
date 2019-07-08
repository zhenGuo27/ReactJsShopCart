import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/FIlter';
import Aside from '../../components/Aside/Aside';
import List from '../../containers/List/List';
import SmallDeviceWrapper from '../../components/SmallDeviceWrapper/SmallDeviceWrapper';

class Layout extends Component {
  render() {    
    return (
      <Aux>
        <Header></Header>
        <div className="mainWrapper">
          <SmallDeviceWrapper>
            <Search></Search>
            <Filter></Filter>
          </SmallDeviceWrapper>
          <List></List>
          <Aside>
            <Search></Search>
            <Filter></Filter>
          </Aside>
        </div>
      </Aux>
    )
  }
}

export default Layout;