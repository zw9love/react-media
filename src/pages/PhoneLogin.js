import React from 'react'
import MyTitle from '../components/MyTitle'
// import '../assets/css/style_common.css'
import '../assets/css/style_phone_login.css'

export default React.createClass({
    getInitialState(){
        return {
            name: '获取验证码',
            codeActive: false,
            loginActive: false,
            timer:null,
            lock:false,
            val1:'',
            val2:''
        }
    },
    change1(event){
        this.setState({val1: event.target.value})
        if(this.state.lock) return;
        if(/^1[34578]\d{9}$/.test(event.target.value)){
            this.setState({codeActive: true})
        } else{
            this.setState({codeActive: false})
        }

        (/^1[34578]\d{9}$/.test(event.target.value) && this.state.val2.trim().length === 4 ) ? this.setState({loginActive: true}) :this.setState({loginActive: false})


    },
    change2(event){
        this.setState({val2: event.target.value});
        (event.target.value.trim().length ===4 && (/^1[34578]\d{9}$/.test(this.state.val1))) ? this.setState({loginActive: true}) : this.setState({loginActive: false})
    },
    getCode(event){
        if(this.state.lock || !this.state.codeActive) return
        this.setState({lock: true})
        this.setState({codeActive: false})
        let num = 10;
        this.setState({name: num + 'S'})
        let self = this;
        clearInterval(this.state.timer);
        this.state.timer=setInterval(function () {
            num--;
            if(num === 0){
                clearInterval(self.state.timer);
                self.setState({name: '再次获取验证码'})
                self.setState({lock: false})
                if(/^1[34578]\d{9}$/.test(self.state.val1)){
                    self.setState({codeActive: true})
                }else{
                    self.setState({codeActive: false})
                }
            }else{
                self.setState({name: num + 'S'})
            }
        }, 1000)
    },
    render(){
        return (
            <div id="phone">
                <MyTitle title="" name=""/>
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
                        <input type="text" placeholder="请输入手机号" maxLength="11" onChange={this.change1} value={this.state.val1}/>
                    </div>
                    <div className="login_block2">
                        <input type="text" placeholder="验证码" maxLength="4" onChange={this.change2} value={this.state.val2}/>
                        <span className={this.state.codeActive ? "hover" : ""}
                              onClick={this.getCode}>{this.state.name}</span>
                    </div>
                    <div className="login_sure">
                        <a href="javascript:;" className={this.state.loginActive ? "hover" : ""}>登录</a>
                    </div>

                    <div className="phone_login_choose">
                        <p>用其他方式登录</p>
                        <ul>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_weibo.png")} alt=""/>
                                <span>微博</span></a>
                            </li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_wechat.png")} alt=""/>
                                <span>微信</span></a>
                            </li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_qq.png")} alt=""/>
                                <span>QQ</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})