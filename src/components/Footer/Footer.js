import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
    return  <div className="Footer_wrapper">
    <div className="Footer_container">
           <div className="Address_container">
           Equipment Sales & Service Corporation<br/>
           1655 Lukken Industrial Drive West<br/>
           LaGrange, Georgia  30240   USA
           </div>
           <div className="Phone_container">
           Contact Us By Phone At:<br/>
           (404) 577-2664 In Atlanta<br/>
           (706) 884-3311 In LaGrange</div>
           <div className="Fax_container">
           <a href="mailto:sales@fluidpowerproducts.com">
           sales@fluidpowerproducts.com</a><br/><br/>
           Fax: (706) 884-9825</div>
    </div>
    </div>
}
}

export default Footer;