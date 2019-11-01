import React, { Component } from "react";
import Navbar from "./navbar";
import MainPage from "./mainPage";
import Staff from "./staff";
import Student from "./student";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Actually class is a function in js...
class App extends Component {
  // we can return only a single element in render method so wrap all ur elements is a final div..
  // In place of it we can also use React.fragment, using this an extra div will not be rendered to our html
  render() {
    return (
      <Router>
        <React.Fragment>
            <Navbar />
            <Route exact path="/" render={ props => <MainPage /> } />
            <Route path="/staff" component={Staff} />
            <Route path="/student" component={Student} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
