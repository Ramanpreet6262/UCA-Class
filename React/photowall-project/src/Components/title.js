import React, { Component } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
    render(){
        return(
            <h1>{this.props.data}</h1>
        )
    }
}

export default Title;