import React,{Component} from 'react'
import Count from './Count/Count'
class Item extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let item=this.props.item;
        return (
            <div className="item">
                <div className="pic">
                    <img src={require("../../../../src/img/logo512.png")} alt=""/>
                </div>
                <div className="desc">
                    <h5>{item.title}</h5>
                    
                </div>
                <div className="price">
                    <b>￥{item.price}</b>
                </div>
                <Count item={item}></Count>
            </div>
        )
    }
}
export default Item;