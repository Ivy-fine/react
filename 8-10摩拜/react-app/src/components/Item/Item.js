import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import "./item.css"
class Item extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let item =this.props.item;
        return (
            <Link className="item" to={{pathname:"/detail",state:item}}>
                <p>单车</p>
                <p className="desc">{item.times}分钟 <span>{item.money} 元 &gt;</span></p>
            </Link>
        )
    }
}
export default Item;