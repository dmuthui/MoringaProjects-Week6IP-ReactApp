import React from 'react';
import {Component} from "react";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {"username": "", "isLoggedin": true, "isLoggedOut": false};
    }
    render() {
        return (
            <React.Fragment>
                <p>Register Component!</p>
                <p> Your name is {this.state.username}</p>
                <button onClick={this.viewName}> View Name</button>
            </React.Fragment>
        );
    }
    viewName = () =>{
        let uname = "David Emerald";
        this.setState({ "username": uname });
    }
}

export default Register;
