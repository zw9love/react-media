import React from 'react'
import '../assets/css/style_orderShow.css'
import OrderCell from '../components/OrderCell'
import Recommend from '../components/Recommend'
import Mask from '../components/Mask'
import { hashHistory } from 'react-router'
import Mock from 'mockjs'
import {myScroll, unScroll} from '../tool/Scroll'

export  default  React.createClass({
    goBack(){
        hashHistory.go(-1)
    },
    getInitialState(){
        return{
            recommendData: [],
            orderData:this.props.location.state.data
        }
    },
    componentDidMount(){
        this.renderRecommendData()
        myScroll(this, {'data_name': 'recommendData', 'fn_name': 'renderRecommendData', 'num': 100})
    },
    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    },
    renderRecommendCell(){
        let arr = []
        let data = this.state.recommendData
        data.map((data,i)=>{
            arr.push(
                <Recommend data={data} key={i}/>
            )
        })

        return arr
    },
    renderRecommendData(){
        let data = Mock.mock({
            'list|5': [{
                'id':'@id',
                'title': '@ctitle(6,50)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'eye_num|0-999': 0,
                'isMovie': '@boolean',
                'isOrder': '@boolean',
                'time':'@datetime("yyyy-MM-dd")',
                'src':'../assets/img/order.png',
                'infoData|1-5':[{
                    'info':'@cparagraph()',
                    'src':require('../assets/img/show_3.jpg')
                }]
            }],
        }).list

        this.setState({recommendData:this.state.recommendData.concat(data)})
    },
    render(){
        return(
            <div>
                <div className="page_header" style={{margin:0,border:'none'}}>
                    <div className="back" onClick={()=>{this.goBack()}}>
                        <img src={require("../assets/img/back.png")} alt="" />
                    </div>
                    <img src={require("../assets/img/page.png")} alt="" />
                    <div className="order-cell">
                        <OrderCell orderActive={this.state.orderData.isOrder}/>
                    </div>
                </div>
                <Mask />
                <div className="container">

                    <div className="page_explain" style={{margin:0}}>
                        <p className="page_title">{this.state.orderData.author}</p>
                        <p className="page_info">{this.state.orderData.title}</p>
                    </div>
                    <div className="line"></div>
                    {this.renderRecommendCell()}
                </div>
            </div>
        )
    }
})