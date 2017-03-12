import React from 'react'
import MyTitle from '../components/MyTitle'
// import '../assets/css/style_common.css'
import '../assets/css/style_phone_login.css'

export default React.createClass({
    getInitialState(){
        return{
            name:'获取验证码'
        }
    },
    render(){
        return(
            <div id="phone">
                <MyTitle title="" name="" />
                <div className="shadow">
                    <div className="model">
                        <p>手机号码有误!!!</p>
                        <div>
                            <button className="sure">确定</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                        <div className="login_block1">
                            <input type="text" placeholder="请输入手机号" maxLength="11" />
                        </div>
                        <div className="login_block2">
                            <input type="text" placeholder="验证码" maxLength="4" />
                                <span>{this.state.name}</span>
                        </div>
                        <div className="login_sure">
                            <a href="javascript:;" >登录</a>
                        </div>
        
                        <div className="phone_login_choose">
                            <p>用其他方式登录</p>
                            <ul>
                                <li><a href="javascript:;"><img src={require("../assets/img/share_weibo.png")} alt="" />
                                    <span>微博</span></a>
                                </li>
                                <li><a href="javascript:;"><img src={require("../assets/img/share_wechat.png")} alt="" />
                                    <span>微信</span></a>
                                </li>
                                <li><a href="javascript:;"><img src={require("../assets/img/share_qq.png")} alt="" />
                                    <span>QQ</span></a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
})