import React,{Component} from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Classify from "../components/Classify/Classify"
import Shopcart from "../components/Shopcart/Shopcart"
import Detail from "../components/Detail/Detail"
import Goodslist from "../components/Goodslist/Goodslist"
class Router extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/classify" component={Classify}></Route>
                    <Route path="/shopcart" component={Shopcart}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/goodslist" component={Goodslist}></Route>
                    <Redirect to="/classify"></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router;