import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="headerstuff">
            <h1 className="center" id="title">A Resume Header</h1>
            <h2 className="center" id="author">By Sara Lichtarge</h2>
        </div>

        <div className="top">
          <h3> Your Resume Header:</h3>
        </div>
      </div>
    );
  }
}

export default Header;
