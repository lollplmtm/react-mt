
import React, { Component } from 'react'
import './index.scss'
import connect from '../../../modules/connect'

class Login extends Component {
    constructor (props) {
        super(props)
        this.login = this.login.bind(this);
    }
    login(e){
        e.preventDefault();  
        let username = this.username.value;
        let password = this.password.value;
        this.props.commons_actions.login({
            username, password,
            success:(res) => {
               console.log(res);
                this.props.history.replace('/')
            }
        })

    }
        
    render () {
        return (
            <div className = "login">
                <div className = "login_login">
                    <form onSubmit = {this.login}>
                    <input ref = {el => this.username = el} placeholder = "请输入账号"  required/>
                    <input ref = {el => this.password = el} placeholder = "请输入密码" text = "password"  required/>
                    <button type="submit" >登录</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default connect(Login,'commons')