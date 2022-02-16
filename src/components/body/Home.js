import React, { Component } from "react";
// import Menu from "./menu";
import Loading from "./loading";


class Home extends Component {

    render() {
        document.title = "Home";
        return (
            <div>
                {/* <Menu /> */}
                {<Loading />}
            </div>
        );
    }
}

export default Home;