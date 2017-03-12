import React from 'react'
import MyLine from './MyLine'
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
            <div id="orderlist">
                <div className="main_order">
                    <a href="javascript:;" onClick={this.jump}>
                        <img src={this.props.data.src} alt="" />
                        <span className="num">{this.props.data.num}</span>
                    </a>

                    <div className="main_order_info">
                        <p><a href="javascript:;" >{this.props.data.name}</a></p>
                        <p>{this.props.data.info}</p>
                    </div>
                    <span id="time">{this.props.data.time}</span>
                </div>
                <MyLine />
            </div>
        )
    }
})