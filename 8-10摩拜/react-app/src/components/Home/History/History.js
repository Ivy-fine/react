import React,{ Component } from 'react'
import axios from 'axios'
import Item from '../../Item/Item'
import './history.css'
class History extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        axios.get("/getlist").then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    componentWillUnmount(){
        this.setState=()=>{return;}
    }
    render(){
        let distance=0,carbon=0,kCal=0;
        this.state.list.forEach(item=>{
            distance += item.distance;
            carbon += item.carbon;
            kCal += item.kCal;
        })
        distance=(distance/1000).toFixed(1);
        carbon=(carbon/1000).toFixed(1);
        return (
            <div className="history main">
                <div className="total">
                    <span><b>{distance}</b>里程(公里)</span>
                    <span><b>{carbon}</b>减排(千克)</span>
                    <span><b>{kCal}</b>消耗(卡)</span>
                </div>
                {
                    this.state.list.map((item,index)=>{
                        return <Item key={index} item={item}></Item>
                    })
                }
            </div>
        )
    }
}
export default History;