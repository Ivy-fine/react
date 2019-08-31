import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from '../components/Home/Home'
import Addlist from '../components/Addlist/Addlist'
import Newadd from '../components/Newadd/Newadd'
import Editadd from '../components/Editadd/Editadd'
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
                    <Route path="/addlist" component={Addlist}></Route>
                    <Route path="/newadd" component={Newadd}></Route>
                    <Route path="/editadd" component={Editadd}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </Router>
        )
    }
}
export default MyRouter;