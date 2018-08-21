import React, { Component } from 'react';
import { Breadcrumb} from 'antd';
import './index.scss';
import { withRouter, Link } from 'react-router-dom'
class Bread extends Component {
    constructor (props) {
        super(props)
        this.renderItems = this.renderItems.bind(this)
    }
    renderItems () {
        if(!this.props.location) return false;
        let { pathname } = this.props.location
        let { menu_config } = this.props
        if ( !menu_config ) return ''
        var items;
        menu_config.map(item=>{
            item.children.map(em=>{
                if(em.path==pathname){
                 items = [(<Breadcrumb.Item key={'/'}>
                           {em.path_title}
                        </Breadcrumb.Item>)]
                }
            })
            
        })
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                { items }
            </Breadcrumb>
        )
    }
    render () {
        return (
            <div className = "bread-crumb">
                { this.renderItems() }
            </div>
        )
    }

}

export default withRouter(Bread) 