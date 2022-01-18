import React, { Component } from "react";

class ErrorPage extends Component {
    render() {
        document.title = "Page Not Found";
        return (
            <div>
                <h2>You may type an invalid url </h2>
                <img src="assets/images/404_error.jpg" />
            </div>
        );
    }
}

export default ErrorPage;