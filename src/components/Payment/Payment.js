import React, { Component } from 'react';
import './Payment.css'
import PAYPALLOGO from '../../images/paypal-logo.png'
import SQUARELOGO from '../../images/square-logo-transparent-4.png'
class Payment extends Component {

 
  render () {
    return (
    <div className="Payment_Container">
        All major credit cards accepted
        <img src={PAYPALLOGO} className="Paypal_logo"/>
        <img src={SQUARELOGO} className="Paypal_logo"/>
    </div>
    )
  }
}

export default Payment;