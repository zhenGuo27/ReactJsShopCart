import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/FIlter';
import Aside from '../../components/Aside/Aside';
import List from '../../containers/List/List';
import SmallDeviceWrapper from '../../components/SmallDeviceWrapper/SmallDeviceWrapper';

import fontawesome from "@fortawesome/fontawesome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";
import faCircle from "@fortawesome/fontawesome-free-regular/faCircle";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";

fontawesome.library.add(faUser);
fontawesome.library.add(faCircle);
fontawesome.library.add(faFacebook);

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