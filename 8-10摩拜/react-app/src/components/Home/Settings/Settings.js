import React,{ Component } from 'react'
import './index.css'
class Settings extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <div className="settings main">
                <div className="banner"></div>
                <div className="bag">
                    <span><b>18元</b><br/>余额</span>
                    <span><b>2张</b><br/>卡券</span>
                    <span><b>免押金</b><br/>押金</span>
                </div>
                <div className="options">
                    <p>免密支付<span>&gt;</span></p>
                    <p>红包<span>&gt;</span></p>
                    <p>模范分<span>&gt;</span></p>
                    <p>消费明细<span>&gt;</span></p>
                </div>
            </div>
        )
    }
}
export default Settings;