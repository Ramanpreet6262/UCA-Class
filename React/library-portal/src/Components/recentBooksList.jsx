import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class RecentBooksList extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [
        {
          name: "B1",
          author: "A1",
          version: "1.1"
        },
        {
          name: "B2",
          author: "A2",
          version: "2.6"
        },
        {
          name: "B3",
          author: "A3",
          version: "1.3"
        },
        {
          name: "B4",
          author: "A4",
          version: "3.1"
        }
      ]
    };

    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(event){
    var book = this.state.bookList;
    book.splice(event.target.id,1);
    this.setState({bookList:book})
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
            </tr>
          </thead>
          <tbody>
            {/* if arrow function returns a single thing then there is no need of return and curly braces of function..*/}
            {this.state.bookList.map((book, index) => (
              <tr>
                <td>{index+1}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.version}</td>
                <td><button className='btn btn-danger' onClick={this.deleteBook} id={index} >Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RecentBooksList;
