import React,{Component} from 'react';
import "./remove.css"
import {withRouter} from 'react-router-dom'
class Dialog extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let {remove,id} = this.props
        return (
            <div className="mark">
                <div className="removebox">
                    <h4>确认删除吗?</h4>
                    <button onClick={()=>{
                        remove(id)
                        this.props.history.push('/addlist')
                    }}>确认</button>
                    <button onClick={remove}>取消</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Dialog);