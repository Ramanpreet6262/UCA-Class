import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" align="center">
          <h6 className="my-5" >To get the list of available books, click the button below:</h6>
          <Link to="/books"><button className="btn btn-primary btn-lg">Display Books</button></Link>
        </div>
      </React.Fragment>
    );
  }
}

       