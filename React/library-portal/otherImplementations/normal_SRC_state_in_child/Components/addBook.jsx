import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

export default class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        name : '',
        author : '',
        version : ''
      },
      redirect: false
    };

    this.addBookHandler = this.addBookHandler.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleVersionChange = this.handleVersionChange.bind(this);
  }

  handleNameChange(event){
    this.setState({ data: {name: event.target.value, author: this.state.data.author, version: this.state.data.version }});
  }

  handleAuthorChange(event){
    this.setState({ data: {name: this.state.data.name, author: event.target.value, version: this.state.data.version }});
  }

  handleVersionChange(event){
    this.setState({ data: {name: this.state.data.name, author: this.state.data.author, version: event.target.value }});
  }

  addBookHandler(event){
    event.preventDefault();
    this.props.addBook(this.state.data);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) return <Redirect to='/books' />;
    else return (
      <div className="container-fluid">
        <div className="row">
          <div className="col" align="center">
            <h4 className="mb-4" style={{ color: "blue" }}>
              Add New Book
            </h4>
          </div>
        </div>
        <Form className="row" onSubmit={this.addBookHandler}>
          <Form.Group className="col-4" controlId="formBasicName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Harry Potter" value={this.state.data.name} onChange={this.handleNameChange} />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicAuthor">
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" placeholder="Robert Frost" value={this.state.data.author} onChange={this.handleAuthorChange} />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicVersion">
            <Form.Label>Book Version</Form.Label>
            <Form.Control type="text" placeholder="1.1" value={this.state.data.version} onChange={this.handleVersionChange} />
          </Form.Group>
          <div align="center" style={{width: "100%"}}>
            <Button variant="success" type="Submit">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}

