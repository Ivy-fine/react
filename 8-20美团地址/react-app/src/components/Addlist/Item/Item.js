import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';

class Item extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        let item =this.props.item
        return (
            <div className="item">
                <p>{item.name} {item.tel}</p>
                <p className="address">{item.address}</p>
                <b onClick={()=>{this.props.history.push({pathname:"/editadd",state:item})}}>编辑</b>
            </div>
        )
    }
}
export default withRouter(Item);