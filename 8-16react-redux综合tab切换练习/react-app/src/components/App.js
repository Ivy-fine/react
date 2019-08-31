import React, { Component } from 'react';
import "../mock/mock"
import { connect } from "react-redux"
import { request_list } from '../store/action/action';
import "./App.css"
import Router from '../router/router'
class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount(){
        this.props.getList()
    }
    render() {
        return (
            <div className="app">
                <Router></Router>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        list: state.list,
        isLoading: state.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getList:()=>{
            dispatch(request_list())
        }
    }
}
let newApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default newApp;

