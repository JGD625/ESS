import React, { Component } from 'react';
import ESSLOGO from '../../images/ESS_LOGO.png'
import NavBar from '../NavBar/NavBar'
import './Header.css'


class Header extends Component {
    render(){
    return <div className="Header_container">

            <img src={ESSLOGO} className="ESS_logo" alt="Equipment Sales and Service"/>
            <div className="Header_title">
            <div className="Header_title_top">Equipment Sales</div >
            <div  className="Header_title_top">& Service Corporation</div >
            <div  className="Header_title_bottom">Fluid Power Technology</div >
            </div>
            <div className="White_triangle">
            </div>
            <NavBar />
            </div>



}
}

export default Header;