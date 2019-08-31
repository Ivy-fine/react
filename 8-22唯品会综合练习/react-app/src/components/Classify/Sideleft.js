import React,{Component} from 'react'
import {connect} from "react-redux"
import {changeIndex} from "../../store/action/action"
class Sideleft extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let {navlist,change,curIndex}=this.props
        return (
            <div className="left">
                {
                    navlist.map((item,index)=>{
                        return <p key={index} className={curIndex===index?"active":''} onClick={()=>{change(index)}}>{item}</p>
                    })
                }
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            navlist:state.leftlist,
            curIndex:state.curIndex
        }
    },
    (dispatch)=>{
        return {
            change:(index)=>{
                dispatch(changeIndex(index))
            }
        }
    }
)(Sideleft);