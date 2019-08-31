import React,{Component} from 'react'
import './Input.css'
class Input extends Component{
    constructor(){
        super();
        this.state={
            msg:''
        }
    }
    addMsg(e){
        this.setState({
            msg:e.target.value
        })
    }
    render(){
        let getMsg = this.props.getMsg;
        return (
            <div className="input">
                <input type="text" onInput={this.addMsg.bind(this)} ref="ipt"/>
                <button onClick={()=>{
                    if(this.state.msg!==""){
                        getMsg(this.state.msg);
                        this.refs.ipt.value="";
                        this.setState({
                            msg:''
                        })
                    }
                }}>发送</button>
            </div>
        )
    }
}
export default Input;