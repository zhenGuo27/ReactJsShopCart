import React from 'react';
import "./SectionList.css";

const sectionList = (props) => {
    let items = [];
    for(let i=0; i < props.sectionData.length; i++) {
        items.push(<div className="sectionItem"><img src={"/images/" + props.sectionData[i].id + ".jpg"} /></div>)
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