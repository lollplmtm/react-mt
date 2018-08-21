import React, { Component } from 'react';
import { Layout } from 'antd';
import LeftNav from '../components/commons/LeftNav'
import Bread from '../components/commons/Bread'
import connect from '../modules/connect'
import './index.scss';
const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    componentDidMount () {
            if ( !this.props.commons.menu_config ) {
                this.props.commons_actions.get_menu_config()
            }
            if ( !this.props.commons.new) {
                this.props.commons_actions.get_new()
            }
            if ( !this.props.commons.other) {
                this.props.commons_actions.get_other()
            }
            if ( !this.props.commons.work) {
                this.props.commons_actions.get_work()
            }
            if ( !this.props.commons.money) {
                this.props.commons_actions.get_money()
            }
        }
    render() {
        return (
            
        <Layout style={{ minHeight: '100vh',background:'#333'}}>
            <Sider style={{ background:'#333'}} 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <div className="logo" style={{background:"#111"}}>买买提</div>
            <LeftNav menu_config = {this.props.commons.menu_config} />
            </Sider>
            <Layout>
            <Header style={{background:"#f5f5f5", padding: 0 }} />
            <Content style={{ margin: '0' }}>
            <Bread menu_config = { this.props.commons.menu_config } />
                <div className = "fewer"  style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center'}}>
                买买提羊肉有限公司@987514778qq.com
            </Footer>
            </Layout>
        </Layout>
        );
  }
}



export default connect(Admin, 'commons')