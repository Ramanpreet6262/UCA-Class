import React, { Component } from "react";
import ReactDOM from "react-dom";

class Photo extends Component {
    render(){
        return(
            <div>
                <img src={this.props.post.image}></img>
                <p>{this.props.post.description}</p>
                <button className="remove-button" onClick={this.props.onRemove}>Remove Image</button>"                
            </div>
        )
    }
}

export default Photo;