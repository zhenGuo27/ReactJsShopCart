import React, { Component } from 'react';
import './SmallDeviceWrapper.css';

class SmallDeviceWrapper extends Component {
    state = {
        mediumPoint: 768,
        largePoint: 992,
        mediumTopDisplay: ""
    }

    handleResize = e => {
        this.setState({ mediumTopDisplay: this.getMediumTopDisplay() });       
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.setState({ mediumTopDisplay: this.getMediumTopDisplay() });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    getMediumTopDisplay(){
        return (window.innerWidth <= this.state.mediumPoint) ? "mediumTopShow" : "mediumTopHide";
    }

    render(){
        return (
            <div className={'mediumTop ' + this.state.mediumTopDisplay}>
                {this.props.children}
            </div>
        );
    }
}

export default SmallDeviceWrapper;