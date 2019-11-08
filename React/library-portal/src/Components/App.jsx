import React, { Component } from "react";
import Navbar from "./navbar";
import Title from "./title";
import RecentBooksList from "./recentBooksList";
import HomePage from "./homePage";
import AddBook from "./addBook";
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
            <Title />
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/"> <HomePage /> </Route> */}
            <Route path="/books" render={ props => <RecentBooksList /> } />
            <Route path="/addBook" component={AddBook} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;