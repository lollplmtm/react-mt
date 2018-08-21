import React, { Component } from 'react';
import { Menu, Icon} from 'antd';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;

class LeftNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
        openKeys: [this.getOpenKey()]
    }
    this.getOpenKey = this.getOpenKey.bind(this);
    this.unfold = this.unfold.bind(this);
    this.sonUnfold = this.sonUnfold.bind(this);
  }
  getOpenKey () {
    let { pathname } =  this.props.location;
    let { menu_config } = this.props;
    if ( !menu_config ) return '/';
    for (let i = 0; i < menu_config.length; i++) {
        if (menu_config[i].children) {
            for (let j = 0; j < menu_config[i].children.length; j++) {
                if ( menu_config[i].children[j].path === pathname ) {
                    return menu_config[i].path
                }                 
            }
        }
    }
    
  }
  unfold ({item,key,keyPath}) {
    this.props.history.push(key);
  }
  sonUnfold ({ key }) {
    this.setState({openKeys:[key]});
  }
  render() {
    if ( !this.props.menu_config ) return '';
    let { menu_config } = this.props;
    return(
      <div className = "app-left-nav">
      <Menu onClick = {this.unfold} openKeys = {this.state.openKeys} theme="light"  selectedKeys={[this.props.location.pathname]}  mode="inline" style={{background:"#333",color:"#fff",border:"none"}} >
                {menu_config.map(item=>{
                if(item.children && item.children.length){
                  return (
                    <SubMenu
                    onTitleClick = { this.sonUnfold }
                    key={item.path}
                    title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                    >
                    {
                      item.children.map(m=>{
                        return  <Menu.Item key={m.path}>{m.title}</Menu.Item>
                    })
                    }
                    </SubMenu>
                  )
                } 
                  return  (
                          <Menu.Item key={item.path}>
                          <Icon type="pie-chart" />
                          <span>{item.title}</span>
                          </Menu.Item>
                          )
                }) 
              }
      </Menu>
      </div>
    ) 
          
  }
}


export default  withRouter(LeftNav) ;