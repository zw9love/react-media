import React from 'react'
import MyTitle from '../components/MyTitle'
import '../assets/css/style_login.css'
import { hashHistory } from 'react-router'

export default React.createClass({
    jump(){
        hashHistory.push('/phoneLogin')
    },
    render(){
        return(
            <div>
                <MyTitle title="选择登录方式" />
                <div className="login_choose">
                    <p>选择登录方式</p>
                    <div className="choose_container">
                        <ul>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_weibo.png")} alt="" />
                                <span>微信</span></a>
                            </li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_wechat.png")} alt="" />
                                <span>微信</span></a>
                            </li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_qq.png")} alt="" />
                                <span>微信</span></a>
                            </li>
                            <li
                            ><a href="javascript:;" onClick={this.jump}><img src={require("../assets/img/share_phone.png")} alt="" />
                                <span>手机号</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})