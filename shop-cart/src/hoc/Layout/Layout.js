import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';


let items = [
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

];
const largePoint = 992;
const mediumPoint = 768;

class Layout extends  Component {
    constructor(props) {
      super(props);
      this.state = {
        mediumTopDisplay: (window.innerWidth <= mediumPoint) ? "mediumTopShow" : "mediumTopHide"
      };
    }

    handleResize = e => {
      const windowSize = window.innerWidth;
      if(windowSize <= mediumPoint) {
        this.setState({mediumTopDisplay: "mediumTopShow"});
      } else {
        this.setState({mediumTopDisplay: "mediumTopHide"});    
      }    
    };

    componentDidMount() {
      console.log(this.state);
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
        let listItems = items.map((item) => 
        <div className="listItem" key={item.name}>
          <img src={item.img} />
          <div className="name">{item.name}</div>
          <div className="price">{item.price}</div>
        </div>   
      );

        return (
            <Aux>
              <Header></Header>
              <div className="mainWrapper">
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
              </div>  
            </Aux>                    
        )
    }
}

export default Layout;