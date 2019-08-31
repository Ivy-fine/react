import React,{Component} from 'react';
import {connect} from 'react-redux';
import { newAdd } from "../../store/action/action";
import {withRouter} from 'react-router-dom'
import './newadd.css'
class Newadd extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            tel:'',
            address:''
        }
    }
    save=(info)=>{
        this.props.newAddress(info)
        this.props.history.push('/addlist')
    }
    render(){
        let {name,tel,address} = this.state
        let id = this.props.nextID
        return (
            <div className="newadd">
                <h3><i onClick={()=>{this.props.history.push("/addlist")}}>&lt;</i>新增收货地址<b onClick={()=>{this.props.history.push('/addlist')}}>取消</b></h3>
                <div className="info">
                    <p><span>收货地址：</span><input type="text" value={address} onChange={(e)=>{
                        this.setState({
                            address:e.target.value
                        })
                    }}/></p>
                    <p><span>联系人：</span><input type="text" value={name} onChange={(e)=>{
                        this.setState({
                            name:e.target.value
                        })
                    }}/></p>
                    <p><span>手机号：</span><input type="text" value={tel} onChange={(e)=>{
                        this.setState({
                            tel:e.target.value
                        })
                    }}/></p>
                </div>
                <button onClick={()=>{this.save({id,name,tel,address})}}>保存地址</button>
            </div>
        )
    }
}
let newNewadd = connect(
    (state)=>{
        return {
            nextID:state.list[state.list.length-1].id+1
        }
    },
    (dispatch)=>{
        return {
            newAddress(info){
                dispatch(newAdd(info))
            }
        }
    }
)(Newadd)
export default withRouter(newNewadd);