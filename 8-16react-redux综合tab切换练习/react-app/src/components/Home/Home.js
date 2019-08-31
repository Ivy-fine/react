import React, { Component, Fragment } from "react";
import Nav from '../Nav/Nav'
import List from '../List/List'
class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <Nav></Nav>
                <List></List>
            </Fragment>

        )
    }
}
export default Home;