import React,{Component} from 'react'
import Cartitem from './Cartitem'
import {connect} from 'react-redux'
class Shopcart extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let {cartlist}=this.props
        return (
            <div className="shopcart">
                <h3>购物车</h3>
                <div className="cartlist">
                    {
                        cartlist.length <= 0 ?
                        <p className="nothing">
                            购物车空空如也
                        </p> :
                        cartlist.map((item,index)=>{
                            return <Cartitem key={index} id={item.id}></Cartitem>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            cartlist:state.cartlist
        }
    }
)(Shopcart);