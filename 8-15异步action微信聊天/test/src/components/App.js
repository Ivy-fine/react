import React,{Component} from 'react'
import '../mock/index'
import List from "./List/List"
import Input from './Input/Input';
import store from '../store/store'
import {request_list,send} from "../store/action/action"

class App extends Component{
    constructor(){
        super();
        this.state={
            isloading:false,
            list:[],
            newMsg:''
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                list:store.getState().list,
                isloading:store.getState().isloading
            })
        })
        store.dispatch(request_list())
    }
    getMsg(msg){
        store.dispatch(send(msg))
    }
    render(){
        return (
            <div className="app">
                {
                    this.state.isloading ? <div className="list">正在加载。。。</div>:
                    <List list={this.state.list}></List>
                }
                <Input getMsg={this.getMsg.bind(this)}></Input>
            </div>
        )
    }
}

export default App;