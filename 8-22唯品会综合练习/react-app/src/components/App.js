import React,{Component} from 'react';
import "../mock/mock"
import Router from '../router/router'
import {connect} from "react-redux"
import { request_list } from '../store/action/action';
import "./App.css"
class App extends Component{
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.props.getList()
    }
    render(){
        return (
            <div className="app">
                <Router></Router>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {}
    },
    (dispatch)=>{
        return{
            getList:()=>{
                dispatch(request_list())
            }
        }
    }
    )(App);

