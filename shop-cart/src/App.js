import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Layout>
         
      </Layout>
      /*<div className="mainWrapper">
        <div className={'mediumTop ' + this.state.mediumTopDisplay}>
          <div className="searchWrapper">Search</div>
          <div className="filterWrpper">Filter</div>
        </div>

        <div className="listWrapper">
           {listItems}
           <div className="pageWrapper">
              <div>{"<<"}</div>
              <div className="pageItem">1</div>
              <div className="pageItem">2</div>
              <div className="pageItem">3</div>
              <div className="pageItem">4</div>
              <div className="pageItem">5</div>
              <div>{">>"}</div>
           </div>
        </div>
        <aside>
          <div className="searchWrapper">Search</div>
          <div className="filterWrpper">Filter</div>
        </aside>
      </div>*/
    );
  }
}

export default App;
