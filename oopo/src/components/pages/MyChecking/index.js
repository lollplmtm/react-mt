
import React, { Component } from 'react'
import { Table, Input, Button, Icon } from 'antd';
import './index.scss'
import connect from '../../../modules/connect'



class MyChecking extends Component {
    state = {
      searchText: '',
    };
  
    handleSearch = (selectedKeys, confirm) => () => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    }
  
    handleReset = clearFilters => () => {
      clearFilters();
      this.setState({ searchText: '' });
    }
  
    render() {
        console.log(this)
      const columns = [{
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div className="custom-filter-dropdown">
              <Input
                ref={ele => this.searchInput = ele}
                placeholder="请输入日期"
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={this.handleSearch(selectedKeys, confirm)}
              />
              <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>确定</Button>
              <Button onClick={this.handleReset(clearFilters)}>重置</Button>
            </div>
         ),
        filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
        onFilter: (value, record) => record.date.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: (text) => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                  ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
              ))}
            </span>
          ) : text;
        },
      }, {
        title:  '是否请假',
        dataIndex: 'leave',
        key: 'leave',
      }, {
        title: '打卡情况',
        dataIndex: 'case',
        key: 'case',
        filters: [{
          text: '迟到',
          value:"迟到",
        }, {
          text: '早退',
          value: "早退",
        },
        {
         text: '正常',
         value: "正常",
          }
        ],
        onFilter: (value, record) => record.case.indexOf(value) === 0,
      }];
      return <Table pagination={{defaultPageSize:8}} columns={columns} dataSource={this.props.commons.work} size="middle" />;
    }
  }

export default connect(MyChecking,'commons')



