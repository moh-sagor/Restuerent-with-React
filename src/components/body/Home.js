import React, { Component } from "react";
import Menu from "./menu";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return {
        a: state.dishes,
        b: state.comments
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("State", this.state);
        console.log("Props", this.props);
    }
    render() {
        document.title = "Home";
        return (
            <div>
                {/* <Menu /> */}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);