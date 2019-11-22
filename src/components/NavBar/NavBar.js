import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

 
  render () {
    return (
    <div className="NavBar_Container">
        <ul className="Nav_ul">
            <li> <a id="home" className="menu-item" href="/">Home</a></li>
            <li><a id="about" className="menu-item" href="/about">About</a></li>
            <li><a id="products" className="menu-item" href="/products">Products</a></li>
            <li><a id="services" className="menu-item" href="/services">Services</a></li>
            <li><a id="markets" className="menu-item" href="/markets">Markets</a></li>
            <li><a id="support" className="menu-item" href="/support">Support</a></li>
            <li><a id="contact" className="menu-item" href="/contact">Contact</a></li>
        </ul>
    </div>
    )
  }
}

export default NavBar;