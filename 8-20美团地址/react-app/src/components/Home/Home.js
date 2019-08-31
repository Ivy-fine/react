import React,{Component} from 'react';
import './home.css';
import {withRouter} from 'react-router-dom'
class Home extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
            <div className="home">
                <h3>个人信息</h3>
                <div className="avatar">
                    <span>头像</span>
                    <span><b className="pic"></b></span>
                </div>
                <div className="nickname">
                    <span>昵称</span>
                    <span>fff</span>
                </div>
                <div className="birthday">
                    <span>生日</span>
                    <span>未设置</span>
                </div>
                <div className="address">
                    <span>收货地址</span>
                    <span onClick={()=>{
                        this.props.history.push('/addlist')
                    }}>修改/添加</span>
                </div>
            </div>
        )
    }
}
export default withRouter(Home) ;