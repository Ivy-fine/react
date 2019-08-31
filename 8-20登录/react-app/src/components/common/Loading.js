import React,{Component} from 'react'
import './loading.css'
class Loading extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <div className="loading">
                <img src="/images/loading.gif" alt=""/>
            </div>
        )
    }
}
export default Loading;