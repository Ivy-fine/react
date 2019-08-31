import React,{Component} from 'react';
import "./Dialog.css"
class Dialog extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
            <p id="dialog">成功添加到购物车</p>
        )
    }
}
export default Dialog;