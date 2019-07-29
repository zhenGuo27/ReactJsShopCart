import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div className="slickWrapper">
                <Slider {...settings}>
                    <div className="sliderItem">
                        <h3>1</h3>
                    </div>
                    <div className="sliderItem">
                        <h3>2</h3>
                    </div>
                    <div className="sliderItem">
                        <h3>3</h3>
                    </div>
                    <div className="sliderItem">
                        <h3>4</h3>
                    </div>
                    <div className="sliderItem">
                        <h3>5</h3>
                    </div>
                    <div className="sliderItem">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}