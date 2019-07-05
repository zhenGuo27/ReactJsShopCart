import React from 'react';
import './Aside.css';

const aside = (props) => {
    return (
       <aside>
           {props.children}
       </aside>
    );
};

export default aside;