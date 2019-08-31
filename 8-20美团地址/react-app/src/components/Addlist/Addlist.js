import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item/Item';
import "./addlist.css";
import {withRouter} from 'react-router-dom';
class Addlist extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        // console.log(this.props.list);
        return (
            <div className="list">
                <h3><i onClick={()=>{this.props.history.push("/home")}}>&lt;</i>我的收货地址</h3>
                <div className="main">
                    {
                        this.props.list.map((item, index) => {
                            return <Item key={index} item={item}></Item>
                        })
                    }
                </div>
                <button onClick={()=>{this.props.history.push("/newadd")}}>新建收货地址</button>
            </div>
        )
    }
}
let newAddlist = connect(
    (state) => {
        return {
            list: state.list
        }
    },
    (dispatch) => {
        return {
           
        }
    })(Addlist)
export default withRouter(newAddlist) ;