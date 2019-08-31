import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { savecartlist,changecount } from "../../store/action/action";
import Dialog from './Dialog'
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            showDialog:false
        }
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render() {
        let goodsitem = this.props.location.state
        return (
            <div className="detail">
                <div className="info">
                    <div className="pic">
                        <img src={goodsitem.pic} alt="" />
                    </div>
                    <p><b>￥{goodsitem.price}</b></p>
                    <p>{goodsitem.text}</p>
                </div>
                <div className="bottom">
                    <span onClick={()=>{this.props.history.push("/shopcart")}}>购物车</span><button onClick={()=>{
                        let flag=false;
                        this.props.cartlist.forEach(item=>{
                            if(item.id===goodsitem.id) flag=true;
                        })
                        if(flag){
                            this.props.changecount(goodsitem.id,"+")
                        }else{
                            this.props.addcart(goodsitem)
                        }
                        this.setState({
                            showDialog:true
                        })
                        this.timer=setTimeout(()=>{
                            this.setState({
                                showDialog:false
                            })
                        },500)
                    }}>加入购物车</button>
                </div>
                { this.state.showDialog && <Dialog></Dialog>}
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return{
            cartlist:state.cartlist
        }
    },
    (dispatch)=>{
        return{
            addcart:(goods)=>{
                dispatch(savecartlist(goods))
            },
            changecount(id,ctype){
                dispatch(changecount(id,ctype))
            }
        }
    }
)(withRouter(Detail));