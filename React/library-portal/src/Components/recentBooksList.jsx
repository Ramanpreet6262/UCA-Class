import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class RecentBooksList extends Component {

    state = {
        bookList: [
            {
                name: 'B1',
                author: 'A1',
                version: '1.1'
            },
            {
                name: 'B2',
                author: 'A2',
                version: '2.6'
            },
            {
                name: 'B3',
                author: 'A3',
                version: '1.3'
            },
            {
                name: 'B4',
                author: 'A4',
                version: '3.1'
            }
        ]
    }

    render() {
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Version</th>
                    </tr>
                </thead>
                <tbody>
                    {/* if arrow function returns a single thing then there is no need of return and curly braces of function..*/}
                    {this.state.bookList.map((book, index) => 
                    <tr key={index}>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.version}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default RecentBooksList;