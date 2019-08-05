import React from 'react';
import "./SectionList.css";
import { Route } from 'react-router-dom'

const sectionList = (props) => {
    let items = [];
    for (let i = 0; i < props.sectionData.length; i++) {
        //items.push(<div className="sectionItem"><img src={"/images/" + props.sectionData[i].id + ".jpg"} /></div>)
        items.push(
            <Route render={({ history }) => (
                <div className="sectionItem" onClick={(event)=> history.push('/product/' + props.sectionData[i].id)}><img src={"/images/" + props.sectionData[i].id + ".jpg"} /></div>
            )} key={props.sectionData[i].id} />
        );    
    }

    return (
        <section className="sectionListWrapper">
            <div className="sectionTitle">Section List Title</div>
            <div className="itemWrapper">
                {items}
            </div>
        </section>
    );
};

export default sectionList;