import React,{Component} from 'react'
import {connect} from "react-redux"
import Rightitem from "./Rightitem"
class Sideright extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let {list}=this.props
        return (
            <div className="right">
                {
                    list.map((item,index)=>{
                        return <Rightitem key={index} subitem={item}></Rightitem>
                    })
                }
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return{
            list:state.rightlist
        }
    },
    (dispatch)=>{
        return{}
    }
)(Sideright);