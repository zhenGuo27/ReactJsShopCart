import React from 'react';
import './Navigation.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavigationItem from './NavigationItem/NavigationItem';
import { Route, Link } from 'react-router-dom';

const navigation = (props) => {
  let navItems = props.navItems.map((item) => {
      if(item.dropdown) {
        return <li className="dropdown navigationItem" key={item.name}>
                <button className="dropbtn">
                  Dropdown
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                 {/*  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                  <Link to="/link1">Link1</Link>
                  <Link to="/link2">Link2</Link>
                  <Link to="/link3">Link3</Link>
                </div>
              </li>
      } else {
        return <NavigationItem key={item.name} name={item.name}></NavigationItem>       
      }
  });

  return (
    <Aux>
      <style>{"\
                .navigationItem:not(:last-child):after{\
                  content: '';\
                  width: 1px;\
                  height: 70%;\
                  background-color: white;\
                  display: inline-block;\
                  vertical-align: middle;\
                  margin-left: 0.3125rem;\
                }\
              "}
      </style>
      <ul className="navigation">
        {navItems}
      </ul>      
    </Aux>
  );
};

export default navigation;