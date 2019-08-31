import React, { Component } from 'react'
import { Route, NavLink, Redirect } from "react-router-dom";
import Settings from './Settings/Settings'
import History from './History/History'
import './home.css'
class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="wrap">
                <div className="header">
                    <div className="avatar"></div>
                    <div className="tel">136****9070</div>
                    <nav>
                        <NavLink to="/home/settings">骑行权益</NavLink>
                        <NavLink to="/home/history">行程记录</NavLink>
                    </nav>
                </div>
                <Route path="/home/settings" component={Settings}></Route>
                <Route path="/home/history" component={History}></Route>
                <Redirect to="/home/settings"></Redirect>
            </div>
        )
    }
}
export default Home;