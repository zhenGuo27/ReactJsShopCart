import React from 'react';
import './Navigation.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavigationItem from './NavigationItem/NavigationItem'; 

const navigation = (props) => {
    let navItems = props.navItems.map((item) => {
        return <NavigationItem key={item.name} name={item.name}></NavigationItem>
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