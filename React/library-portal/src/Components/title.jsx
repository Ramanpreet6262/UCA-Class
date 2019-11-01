import React, { Component } from "react";

export default class Title extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <center><h1 style={{color: "orange", marginBottom: '15px', marginTop: '15px'}}>Welcome to Pustakalia</h1></center>
                    </div>
                </div>
            </div>    
        );
    }
}
