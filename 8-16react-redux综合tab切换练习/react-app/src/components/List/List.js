import React, { Component } from 'react';
import { connect } from "react-redux"
import Item from './Item/Item'
class List extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        let {list,curIndex,isLoading} = this.props;
        console.log(list);
        console.log(list[curIndex],isLoading);
                
        return (
            <div className="list">
                {
                    isLoading?"正在加载":
                    list[curIndex].cont.map((item,index)=>{
                        return <Item key={index} item={item}></Item>
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        list: state.list,
        curIndex:state.curIndex,
        isLoading: state.isLoading
    }
}
let newList = connect(mapStateToProps)(List)
export default newList;

