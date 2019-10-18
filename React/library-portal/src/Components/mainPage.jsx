// Components class name should be pascal case like RamanPreet
// Components file name should be camel case like ramanPreet

import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import RecentBooksList from "./recentBooksList";

class MainPage extends Component {
    render(){
        return(
            // this row and col is from bootstrap grid system 
            // <React.Fragment className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <center><h1 style={{color: "orange", marginBottom: '15px', marginTop: '15px'}}>Welcome to Pustakalia</h1></center>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RecentBooksList />
                    </div>
                </div>
            </div>
            // </React.Fragment>
        )
    }
}

export default MainPage;