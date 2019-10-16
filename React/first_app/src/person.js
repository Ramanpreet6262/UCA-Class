import React, { Component } from "react";
import ReactDOM from "react-dom";

class Person extends Component {
    render(){
        return(
            <p> Name is: {this.props.name} and id is: {this.props.id}</p>
        );
    }
}

export default Person;