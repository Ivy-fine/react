import React,{ Component } from 'react'
import './detail.css'
class Detail extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        let item =this.props.location.state;
        return (
            <div className="detail">
                <div className="info">
                    <p className="title"><b>车辆编号</b><br/>{item.id}</p>
                    <p className='money'>{item.money}<span>元</span></p>
                    <div className="others">
                        <p><b>{item.carbon}</b>节约碳排量（g）</p>
                        <p><b>{item.kCal}</b>卡路里（kCal）</p>
                        <p><b>{item.times}</b>骑行时间（min）</p>
                        <p><b>{item.distance}</b>骑行距离（m）</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;