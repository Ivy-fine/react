import React,{Component} from 'react'
import {connect} from 'react-redux'
class Home extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let info =this.props.info;
        return (
            <div className="home">
                <div className="left">
                    <div className="avatar">
                        <img src={info.avatar} alt=""/>
                    </div>
                    <p>欢迎，用户{info.username}</p>
                </div>
            </div>
        )
    }
}
let newHome =connect((state)=>{
    return {
        info:state.info
    }
})(Home)
export default newHome;