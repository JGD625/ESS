import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './Menu.css'

class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu right disableAutoFocus>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="products" className="menu-item" href="/products">Products</a>
        <a id="services" className="menu-item" href="/services">Services</a>
        <a id="markets" className="menu-item" href="/markets">Markets</a>
        <a id="support" className="menu-item" href="/support">Support</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}

export default BurgerMenu;