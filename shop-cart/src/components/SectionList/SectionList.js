import React from 'react';
import "./SectionList.css";

const sectionList = (props) => (
    <section className="sectionListWrapper">
        <div className="sectionTitle">Section List Title</div>
        <div className="itemWrapper">
            <div className="sectionItem"><img src="/images/1.jpg" /></div>
            <div className="sectionItem"><img src="/images/2.jpg" /></div>
            <div className="sectionItem"><img src="/images/3.jpg" /></div>
            <div className="sectionItem"><img src="/images/4.jpg" /></div>
        </div>
    </section>
);

export default sectionList;