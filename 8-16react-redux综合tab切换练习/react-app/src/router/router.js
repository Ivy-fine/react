import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React,{Component} from 'react'
import Home from '../components/Home/Home'
import Detail from '../components/Detail/Detail'
class MyRouter extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
            <Router>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/detail/:id?" component={Detail}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </Router>
        )
    }
}

export default MyRouter;