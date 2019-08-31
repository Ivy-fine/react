import React, { Component } from 'react';
import './login.css';
import { connect } from "react-redux";
import { request_user } from "../../store/action/action";
import { Redirect } from 'react-router-dom';
import Loading from '../common/Loading'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            pwd: ''
        }
    }
    handlePwdChange = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }
    handleUserChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        let { username, pwd } = this.state
        let { isLoading, logined, login, msg } = this.props
        if (logined) {
            return (
                <Redirect to="/home"></Redirect>
            )
        }
        return (
            <div className="login">
                {
                    isLoading ? <Loading></Loading> :
                        <div className="loginbox">
                            <input type="text" placeholder="请输入用户名" value={username} onChange={this.handleUserChange} />
                            <input type="password" placeholder="请输入密码" value={pwd} onChange={this.handlePwdChange} />
                            <button onClick={() => {
                                login({ username, pwd })
                            }}>登录</button>
                            <p>{msg!==""? msg :""}</p>
                        </div>
                }
            </div>
        )
    }
}

let newLogin = connect(
    (state) => {
        return {
            isLoading: state.isLoading,
            info: state.info,
            logined: state.logined,
            msg: state.msg
        }
    },
    (dispatch) => {
        return {
            login: (opt) => {
                dispatch(request_user(opt))
            }
        }
    })(Login)
export default newLogin;