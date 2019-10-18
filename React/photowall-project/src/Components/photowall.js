import React, { Component } from "react";
import ReactDOM from "react-dom";
import Photo from "./photo";

class PhotoWall extends Component {
    render(){
        return(
            <div className="photogrid">
                {this.props.posts.map((post, index) => {
                    return <div>
                        <Photo key={index} post={post} onRemove={this.props.onRemove} />
                        <button className="remove-button" onClick={this.props.onAdd}>Add</button>

                        {/* onRemove = {() => {this.props.onRemove(argument)}} */}
                    </div>
                })}
            </div>
        )
    }
}

export default PhotoWall;