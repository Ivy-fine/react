import React,{Component} from 'react';
import Router from '../router/Router';
import "../mock/mock";
import { connect } from 'react-redux'
import { request_list } from '../store/action/action';
import './app.css'
class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    componentDidMount() {
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
let newApp = connect(
    (state) => {
        return {
            list: state.list
        }
    },
    (dispatch) => {
        return {
            getList: () => {
                dispatch(request_list())
            }
        }
    })(App)
export default newApp ;

