import React from 'react'
import '../assets/css/style_myOrder.css'
import MyTitle from '../components/MyTitle'
import { hashHistory } from 'react-router'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'

export default React.createClass({
    getInitialState(){
        return{
            orderData:[]
        }
    },
    componentDidMount(){
        this.renderOrderData()
        myScroll(this, {'data_name': 'orderData', 'fn_name': 'renderOrderData', 'num': 100})
    },
    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    },
    goOrderShow(data){
        hashHistory.push({
            pathname:'/subscribe'
        })
    },
    renderOrderData(){
        let data = Mock.mock({
            'list|10': [{
                'id': '@id',
                'title': '@ctitle(6,150)',
                'author': '@cword(2,8)',
                'isOrder': '@boolean',
                'src': require('../assets/img/order.png'),
                'time': '@time("HH:mm")',
                'num|0-99': 0,
            }],
        }).list

        this.setState({orderData:this.state.orderData.concat(data)})

    },

    renderOrderCell(){
        let arr = []
        let data = this.state.orderData
        data.map((data,i)=>{
            arr.push(
                <div key={i}>
                    <div className="main_order">
                        <a href="javascript:;" onClick={()=>{this.goOrderShow(data)}}>
                            <img src={data.src} alt="" />
                            <span className="num">{data.num}</span>
                        </a>

                        <div className="main_order_info">
                            <p onClick={()=>{this.goOrderShow(data)}}>
                                <a href="javascript:;">{data.author}</a>
                            </p>
                            <p onClick={()=>{this.goOrderShow(data)}}>{data.title}</p>
                        </div>
                        <span id="time">{data.time}</span>
                    </div>
                    <div className="line"></div>
            </div>
            )
        })

        return arr
    },
    render(){
        return(
            <div>
                <MyTitle title="我的订阅" />
                {
                    this.state.orderData.length == 0 ? (
                            <div className="no_comment">
                                <p>暂无订阅内容</p>
                            </div>
                        ) : null
                }
                <div className="container">
                    <div className="add_container" onClick={this.jump}>
                        <a href="javascript:;">
                            <div className="order_search" style={{marginTop:0}}>
                                <div className="bottom"></div>
                                <div className="big_add">
                                    <div className="add">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span>&nbsp;添加更多订阅号</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    {this.renderOrderCell()}
                </div>
             </div>
        )
    }
})