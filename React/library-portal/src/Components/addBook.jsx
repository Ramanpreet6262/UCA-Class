import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AddBook extends Component {
  constructor(){
    super();
    this.addBookHandler = this.addBookHandler.bind(this);
  }

  addBookHandler(event){
    const name = event.target.name.value;
    alert(name);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col" align="center">
            <h4 className="mb-4" style={{ color: "blue" }}>
              Add New Book
            </h4>
          </div>
        </div>
        <Form className="row">
          <Form.Group className="col-4" controlId="formBasicName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Harry Potter" id="name" />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicAuthor">
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" placeholder="Robert Frost" id="author" />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicVersion">
            <Form.Label>Book Version</Form.Label>
            <Form.Control type="text" placeholder="1.1" id="version" />
          </Form.Group>
          <div align="center" style={{width: "100%"}}>
            <Link to="/books"><Button variant="success" type="submit" onClick={this.addBookHandler}>Submit</Button></Link>
          </div>
        </Form>
      </div>
    );
  }
}
