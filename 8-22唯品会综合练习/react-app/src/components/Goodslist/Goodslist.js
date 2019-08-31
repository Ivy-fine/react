import {connect} from "react-redux"
import React,{Component} from 'react'
import Goodsitem from './Goodsitem'
class Goodslist extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        // console.log(this.props.goodslist)
        return (
            <div className="goodsbox">
                <h3>{this.props.location.state}</h3>
                <div className="goodslist">
                    {
                        this.props.goodslist.map((item,index)=>{
                            return <Goodsitem key={index} goodsitem={item}></Goodsitem>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return{
            goodslist:state.goodslist
        }
    }
)(Goodslist);