import React, { Component } from 'react'
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { savegoodslist } from "../../store/action/action";
class Rightitem extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        let subitem = this.props.subitem;
        return (
            <div className="rightitem">
                <h5>{subitem.subtitle}</h5>
                <div className="subnav">
                    {
                        subitem.subcont.map((subcont, index) => {
                            return (
                                <div className="subnavitem" key={index} onClick={()=>{
                                    this.props.goodsId(subcont.id)
                                    this.props.history.push({pathname:"/goodslist",state:subcont.title})
                                }}>
                                    <img src={subcont.pic} alt="" />
                                    <p>{subcont.title}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
export default connect(
    (state)=>{
        return{}
    },
    (dispatch)=>{
        return{
            goodsId:(id)=>{
                dispatch(savegoodslist(id))
            }
        }
    }
)(withRouter(Rightitem));