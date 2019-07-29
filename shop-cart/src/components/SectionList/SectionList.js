import React from 'react';
import "./SectionList.css";

const sectionList = (props) => (
    <section className="sectionListWrapper">
        <div className="sectionTitle">Section List Title</div>
        <div className="itemWrapper">
            <div className="sectionItem">listItem1</div>
            <div className="sectionItem">listItem2</div>
            <div className="sectionItem">listItem3</div>
            <div className="sectionItem">listItem4</div>
        </div>
    </section>
);

export default sectionList;