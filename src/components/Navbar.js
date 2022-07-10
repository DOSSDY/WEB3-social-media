import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'
import Main from './Main';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-grey fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.ookbee.com/?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY_B86Krn0lXgusPe7pvAF1hYmKhSVPLLep9vvx-KxbE51QrP4ZoQr0aAu0wEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={photo} width="30" height="30" className="d-inline-block align-top" alt="" />
          OOKBEE media
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-primary">
              <small id="account">{this.props.account}</small>
              </small>
              { this.props.images.map((image) => {
                return <span className="text-light">
                <small id="images">TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH | </small>
              </span>
              })}
             
              
              
              
              
            
            
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;