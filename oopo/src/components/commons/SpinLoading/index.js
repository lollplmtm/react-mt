
import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';
class SpinLoading extends Component {

    render () {
        let  {loading}  = this.props;
        return (
            <div style = {{ display: loading ? 'block' : 'none' }} className = "spin-loading">
                <Spin tip="请稍等..." spinning={loading}></Spin>
            </div>
        )
    }

}

export default SpinLoading