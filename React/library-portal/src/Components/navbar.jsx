import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class Navbar extends Component {
  render() {
    return (
      // container is for middle one with margins on side
      // container-fluid is for complete Page 
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/*eslint-disable-next-line*/}
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                {/*eslint-disable-next-line*/}
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                {/*eslint-disable-next-line*/}
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                {/*eslint-disable-next-line*/}
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;