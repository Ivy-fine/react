import React,{Component} from 'react'
import { changecount } from "../../store/action/action";
import { connect } from "react-redux";
class Cartitem extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let {changeCount,cartlist,id}=this.props;
        let cartitem = cartlist.filter(item=>item.id===id)[0]
        return(
            <div className="cartitem">
                <div className="pic">
                    <img src={cartitem.pic} alt=""/>
                </div>
                <div className="desc">
                    <h5>{cartitem.text}</h5>
                </div>
                <div className="price">
                    <b>￥{cartitem.price}</b>
                </div>
                <div className="count">
                    <button onClick={()=>{
                        changeCount(cartitem.id,"-")
                    }}>-</button>
                    <span>{cartitem.count}</span>
                    <button onClick={()=>{
                        changeCount(cartitem.id,"+")
                    }}>+</button>
                </div>
                <b className="delete">x</b>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            cartlist:state.cartlist
        }
    },
    (dispatch)=>{
        return{
            changeCount:(id,ctype)=>{
                dispatch(changecount(id,ctype))
            }
        }
    }
)(Cartitem);