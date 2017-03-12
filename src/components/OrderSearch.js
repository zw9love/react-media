import React from 'react';
import '../assets/css/style_orderSearch.css'
import { hashHistory } from 'react-router'

export default React.createClass({
    jump(){
        hashHistory.push({
            pathname:'/orderlist'
        })
    },
    render(){
        return(
            <div className="search_contain" id="ordersearch" onClick={this.jump}>
                <div className="media_search">
                    <span>我的订阅号：时尚芭莎...</span>
                    <span></span>
                </div>
            </div>
        )
    }
});