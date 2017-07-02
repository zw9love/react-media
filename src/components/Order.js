import React from 'react';
import MyLine from './MyLine'
import OrderButton from './OrderCell'
import '../assets/css/style_order.css'
import { hashHistory } from 'react-router'

export default React.createClass({
    jump(){
        hashHistory.push({
            pathname:'/ordershow',
            state:this.props.data
        })
    },
    render(){
        return(
            <div>
                <div className="main_order main_sp">
                    <a href="javascript:;" onClick={this.jump}><img src={this.props.data.src} alt="" /></a>
                <div className="main_order_info">
                    <p><a href="javascript:;" onClick={this.jump}>{this.props.data.name}</a></p>
                <p>{this.props.data.time || this.props.data.info}</p>
                </div>
                <OrderButton modalShow={this.props.modalShow} changeModalStyle={this.props.changeModalStyle}/>
                </div>
                <MyLine />
            </div>
        )
    }
})