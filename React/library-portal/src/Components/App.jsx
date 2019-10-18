import React, { Component } from "react";
import Navbar from "./navbar";
import MainPage from "./mainPage";

// Actually class is a function in js...
class App extends Component {
  // we can return only a single element in render method so wrap all ur elements is a final div..
  // In place of it we can also use React.fragment, using this an extra div will not be rendered to our html
  render() {
    return (
      // <React.Fragment>
      //     <Navbar />
      //     <MainPage />
      // </React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MainPage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
