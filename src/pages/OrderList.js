import React from 'react'
import '../assets/css/style_common.css'
import '../assets/css/style_orderlist.css'
import MyTitle from '../components/MyTitle'
import OrderListLi from '../components/OrderListLi'
import { hashHistory } from 'react-router'

export default React.createClass({
    getInitialState(){
        return{
            list:[
                {time:'22:08',num:20,name:'全民星探1',info:'著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1著名奶爸耍大牌经纪人一年四换1',src:require('../assets/img/orderlogo.png')},
                {time:'22:09',num:21,name:'全民星探2',info:'著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2著名奶爸耍大牌经纪人一年四换2',src:require('../assets/img/orderlogo.png')},
                {time:'22:10',num:22,name:'全民星探3',info:'著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3著名奶爸耍大牌经纪人一年四换3',src:require('../assets/img/orderlogo.png')},
                {time:'22:11',num:23,name:'全民星探4',info:'著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4著名奶爸耍大牌经纪人一年四换4',src:require('../assets/img/orderlogo.png')},
            ]
        }
    },
    jump(){
        hashHistory.push({
            pathname:'/subscribe'
        })
    },
    render(){
        return(
            <div>
                <MyTitle title="我的订阅" name="" />
                <div className="add_container" onClick={this.jump}>
                    <a href="javascript:;">
                        <div className="media_search_orderlist">
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

                <p className="noorder">暂无订阅内容</p>
        
                <div className="container">
                    {
                        this.state.list.map(function(msg,i){
                            return (
                                <OrderListLi key={i} data={msg}/>
                            )
                        })
                    }
                </div>
             </div>
        )
    }
})