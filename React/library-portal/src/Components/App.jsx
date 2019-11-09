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
  
  constructor(){
    super();
    this.state = {
      book: {},
      toAdd: false
    }
    this.addBook = this.addBook.bind(this);
  }

  addBook(data){
      this.setState({book: data, toAdd: true});
  }

  render() {
    return (
      <Router>
        <React.Fragment>
            <Navbar />
            <Title />
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/"> <HomePage /> </Route> */}
            <Route path="/books" render={ props => <RecentBooksList book={this.state.book}/> } />
            <Route path="/addBook" render={ props => <AddBook addBook={this.addBook} /> } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
