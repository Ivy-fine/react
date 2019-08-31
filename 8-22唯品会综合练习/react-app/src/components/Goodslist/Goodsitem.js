import React,{Component} from 'react'
import { withRouter } from "react-router-dom";

class Goodsitem extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let goodsitem=this.props.goodsitem
        return (
            <div className="goodsitem" onClick={()=>{
                this.props.history.push({pathname:"/detail",state:goodsitem})
            }}>
                <div className="pic">
                    <img src={goodsitem.pic} alt=""/>
                </div>
                <p>￥{goodsitem.price}</p>
                <p className="desc">{goodsitem.text}</p>
            </div>
        )
    }
}
export default withRouter(Goodsitem);