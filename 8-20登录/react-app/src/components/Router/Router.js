import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/Home'
import Login from '../Login/Login'
class MyRouter extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </Router>
        )
    }
}

export default MyRouter;