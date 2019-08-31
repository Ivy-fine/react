import React, { Component } from 'react'
import store from '../../../../store/store';
import {add,sub} from '../../../../store/action/action'
class Count extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    sub=(id)=>{
        store.dispatch(sub(id))
    }
    add=(id)=>{
        store.dispatch(add(id))
    }
    render() {
        let {count,id}=this.props.item;
        return (
            <div className="count">
                <button onClick={()=>this.sub(id)}>-</button>
                <span>{count}</span>
                <button onClick={()=>this.add(id)}>+</button>
            </div>
        )
    }
}

export default Count;