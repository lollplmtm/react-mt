
import React, { Component } from 'react'
import './index.scss'
import { Table } from 'antd';
import connect from '../../../modules/connect';


class Template extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        console.log(this.props)
        const columns = [{
            title: '月份',
            dataIndex: 'date',
          }, {
            title: '奖金',
            dataIndex: 'leave',
          }, {
            title: '金额',
            dataIndex: 'case',
          }];
        return (
            <div className = "template">
                 <div>
                    <h4>2018工资表</h4>
                    <Table pagination={{defaultPageSize:8}} columns={columns} dataSource={this.props.commons.money} size="middle" />
                </div>
            </div>
        )
    }

}

export default connect(Template,'commons') 


