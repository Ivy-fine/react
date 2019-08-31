import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
class Item extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let item = this.props.item;
        return (
            <div className="item" onClick={()=>{
                this.props.history.push({pathname:'/detail/',state:item})
            }}>
                <div className="pic">
                    <img src={item.pic} alt=""/>
                </div>
                <h4>{item.title}</h4>
                <p>￥{item.price}</p>
            </div>
        )
    }
}
export default withRouter(Item);