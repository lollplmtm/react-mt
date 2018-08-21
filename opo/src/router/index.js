import  React, { Component } from 'react'

import { 
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import Bonus from '../components/pages/Bonus'
import Jurisdiction from '../components/pages/Jurisdiction'
import Money from '../components/pages/Money'
import MyChecking from '../components/pages/MyChecking'
import MyOvertime from '../components/pages/MyOvertime'
import Notice from '../components/pages/Notice'
import App from '../App'
import Home from '../components/pages/Home'
import Admin from '../Admin/index'
import Login from '../components/pages/Login'

export default class extends Component {

    render () {
        return (
            <Router>              
                <App>
                    <Switch>
                        <Route path = "/login" component = {Login} />
                        <Route path = "/" render = {() => (
                            <Admin>
                                <Switch>
                                    <Route exact path = "/" component = { Home } />
                                    <Route exact path = "/notice" component = { Notice } />
                                    <Route exact path = "/gl/myovertime" component = { MyChecking } />
                                    <Route exact path = "/gl/mychecking" component = {MyOvertime } />
                                    <Route exact path = "/js/money" component = { Money} />
                                    <Route exact path = "/js/bonus" component = { Bonus } />
                                    <Route path = "/jurisdiction" component = {Jurisdiction} />
                                </Switch>
                            </Admin>
                        )} />
                    </Switch>
                </App>
            </Router>
        )
    }

}