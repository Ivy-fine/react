import React,{Component} from 'react'
import './List.css'
class List extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    componentDidUpdate(){
        this.refs.list.scrollTo(0,this.refs.list.scrollHeight)
    }
    render(){
        let list =this.props.list;
        return (
            <div className="list" ref="list">
                {
                    list.map((item,index)=>{
                        return (
                            <div className="item" key={index}>
                                <div className="avatar">
                                    <img src={item.avatar} alt=""/>
                                </div>
                                <div className="msg">
                                    <span>name</span>
                                    <div className="text">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default List;