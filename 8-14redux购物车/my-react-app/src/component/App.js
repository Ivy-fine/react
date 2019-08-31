import React, { Component } from 'react'
import List from './List/List'
import store from '../store/store';
class App extends Component {
    constructor() {
        super();
        this.state = {
            total:0
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                total:store.getState().reduce((sum,g)=>{
                    return sum + g.price*g.count
                },0)
            })
        })
        this.setState({
            total:store.getState().reduce((sum,g)=>{
                return sum + g.price*g.count
            },0)
        })
    }
    render() {
        return (
            <div className="app">
                <List></List>
                <div className="bottom">
                    <p>总金额：<b>￥{this.state.total.toFixed(2)}</b></p>
                    <button>结算</button>
                </div>
            </div>
        )
    }
}

export default App;