import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductSlider.css'

export default class ProductSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
        };
    
      return (
        <div className="Product_slider_container">
          <Slider {...settings}>
            <div className="Product_item_container">
              <h3 className="Product_title">HOSES</h3>
            </div>
            <div className="Product_item_container">
              <h3 className="Product_title">TUBING</h3>
            </div>
            <div className="Product_item_container">
              <h3 className="Product_title">REGULATORS</h3>
            </div>
            <div className="Product_item_container">
              <h3 className="Product_title">VALVES</h3>
            </div>
            <div className="Product_item_container">
              <h3 className="Product_title">PUMPS</h3>
            </div>
            <div className="Product_item_container">
              <h3 className="Product_title">CYLINDERS</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }