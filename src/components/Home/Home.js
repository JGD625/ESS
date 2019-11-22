import React, { Component } from 'react';
import Slider from '../Slider/Slider'
import ProductSlider from '../ProductSlider/ProductSlider'
import Payment from '../Payment/Payment'

class Home extends Component {

 
  render () {
    return (
    <div className="HOME_Container">
      <Slider />
      <ProductSlider />
      <Payment />
    </div>
    )
  }
}

export default Home;