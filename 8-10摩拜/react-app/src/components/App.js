import React,{Component} from 'react';
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom'
import Home from './Home/Home'
import Detail from './Detail/Detail'
import "../mock/mock"
class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<Router>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/Detail" component={Detail}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;

