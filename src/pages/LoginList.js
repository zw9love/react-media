import React from 'react'
import MyTitle from '../components/MyTitle'
import '../assets/css/style_common.css'
import '../assets/css/style_login.css'
import $ from 'jquery'
import { hashHistory } from 'react-router'

var Temp = React.createClass({
    render(){
        return(
            <li onClick={this.jump}>
                <a href="javascript:;">
                    <img src={this.props.data.src} alt="" />
                    <span>{this.props.data.name}</span>
                </a>
            </li>
        )
    },
    jump(){
        if(this.props.index === this.props.length - 1){
            hashHistory.push('/phonelogin')
        }
    }
})

export default React.createClass({
    render(){
        let self = this;
        return(
            <div>
                <MyTitle title="" name="" />
                <div className="login_choose">
                    <p>选择登录方式</p>
                    <div className="choose_container">
                        <ul>
                            {
                                this.state.list.map(function(msg,i){
                                    return (
                                        <Temp key={i} data={msg} index={i} length={self.state.list.length}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    getInitialState(){
        return{
            list:[
                {name:'微博',src:require('../assets/img/share_weibo.png')},
                {name:'微信',src:require('../assets/img/share_wechat.png')},
                {name:'QQ',src:require('../assets/img/share_qq.png')},
                {name:'手机号',src:require('../assets/img/share_phone.png')},
            ]
        }
    },
    componentWillMount(){
        $('body').height('100%')
    },
    componentWillUnmount(){
        $('body').height('auto')
    }
})