import React, { Component } from 'react';
import { connect } from "react-redux"
import {tab} from '../../store/action/action'
class Nav extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        let {list,curIndex} = this.props;
        return (
            <div className="nav">
                {
                    list.map((item,index)=>{
                        return <span key={index} className={index===curIndex?"active":''} onClick={()=>{this.props.tabNav(index)}}>{item.type}</span>
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        list: state.list,
        curIndex:state.curIndex
    }
}
function mapDispatchToProps(dispatch) {
    return {
        tabNav:(index)=>{
            dispatch(tab(index))
        }
    }
}
let newNav = connect(mapStateToProps,mapDispatchToProps)(Nav)
export default newNav;

