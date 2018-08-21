
import React, { Component } from 'react';
import './index.scss';
import { Collapse } from 'antd';
import connect from '../../../modules/connect'

const Panel = Collapse.Panel;
class Noctice extends Component {
    constructor (props) {
        super(props)
    }
    callback(key) {
        
    }
    render () {
        let   new_opo = this.props.commons.new;
        if(!new_opo) return false;
        return (
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                {new_opo.map((item,i)=>{
                    return (<Panel header={item.title} key={i}>
                           <p>{item.nav}</p>
                           </Panel>
                    )
                })
                }
                </Collapse>
        )
    }

}

export default connect(Noctice,'commons') 



