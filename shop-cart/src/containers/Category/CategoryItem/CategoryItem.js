import React, { Component } from 'react';


class CategoryItem extends Component {
   state = {
      active: false
   }
    
   render(){
      const className = "cItem";
      return(
         <li className={className} id={this.props.id} onClick={this.props.filterClick}>{this.props.name}</li>
      );
   }
}

export default CategoryItem;



/* const categoryItem = (props) => {
   return(
      <li id={props.id} className="cItem" onClick={props.filterClick}>{props.name}</li>
    );
};

export default categoryItem; */