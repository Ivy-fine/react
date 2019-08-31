import React,{Component} from 'react';
import {connect} from 'react-redux';
import { editAdd,remove } from "../../store/action/action";
import {withRouter} from 'react-router-dom';
import RemoveDialog from '../common/removeDialog'
import './editadd.css'
class Editadd extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            tel:'',
            address:'',
            show:false
        }
    }
    edit=(info)=>{
        this.props.editAddress(info)
        this.props.history.push('/addlist')
    }
    componentDidMount(){
        let editInfo=this.props.location.state;
            this.setState({
                name:editInfo.name,
                tel:editInfo.tel,
                address:editInfo.address,
                id:editInfo.id
            })
    }
    remove=(id)=>{
        this.setState({
            show:false
        })
        this.props.remove(id)
    }
    showDialog(){
        this.setState({
            show:true
        })
    }
    render(){
        let {id,name,tel,address,show} = this.state
        return (
            <div className="editadd">
                <h3><i onClick={()=>{this.props.history.push("/addlist")}}>&lt;</i>编辑收货地址<b onClick={()=>{this.showDialog()}}>删除</b></h3>
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
                <button onClick={()=>{this.edit({id,name,tel,address})}}>保存地址</button>
                {show && <RemoveDialog remove={this.remove} id={id}></RemoveDialog>}
            </div>
        )
    }
}
let newEditadd = connect(
    (state)=>{
        return {}
    },
    (dispatch)=>{
        return {
            editAddress(info){
                dispatch(editAdd(info))
            },
            remove(id){
                dispatch(remove(id))
            }
        }
    }
)(Editadd)
export default withRouter(newEditadd);