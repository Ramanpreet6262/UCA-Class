import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class RecentBooksList extends Component {
  constructor() {
    super();
    this.state = {
      bookList: []
    };

    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    console.log("Component is Mounted");
    fetch("http://localhost:3000/bookList")
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res);
        console.log(JSON.stringify(res));
        this.setState({bookList : res})
      });
  }

  deleteBook(event) {
    var book = this.state.bookList;
    book.splice(event.target.id, 1);
    this.setState({ bookList: book });
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Version</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* if arrow function returns a single thing then there is no need of return and curly braces of function..*/}
            {this.state.bookList.map((book, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.version}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={this.deleteBook}
                    id={index}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div align="center" style={{ width: "100%" }} className="mt-4">
          <Link to="/addBook">
            <Button variant="success">Add Book</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RecentBooksList;
