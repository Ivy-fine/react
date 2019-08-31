import React, { Component } from 'react'
import store from '../../store/store'
import Item from './Item/Item'
import "./List.css"
class List extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                list:store.getState()
            })
        })
        this.setState({
            list:store.getState()
        })
    }
    render(){
        return (
            <div className="list">
                {
                    this.state.list.map((item,index)=>{
                        return <Item key={index} item={item}></Item>
                    })
                }
            </div>
        )
    }
}
export default List;