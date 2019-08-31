import React, { Component } from 'react';
import Sideleft from "./Sideleft"
import Sideright from "./Sideright"
import {withRouter} from 'react-router-dom'
class Classify extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="wrap">
                <div className="classify">
                    <Sideleft></Sideleft>
                    <Sideright></Sideright>
                </div>
                <nav>
                    <span>首页</span>
                    <span className="active">分类</span>
                    <span onClick={()=>{this.props.history.push('/shopcart')}}>购物车</span>
                    <span>个人中心</span>
                </nav>
            </div>

        )
    }
}
export default withRouter(Classify);
