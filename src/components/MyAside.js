import React from 'react'
import '../assets/css/style_myAside.css'
import AsideLi from './AsideLi'
import { hashHistory } from 'react-router'

export default React.createClass({
    jump(){
        hashHistory.push('/loginlist')
    },
    render(){
        let self=this;
        return(
            <div className={this.state.isactive ? "aside go_aside" : "aside"} >
                <div className="login_head">
                    <a href="javascript:;" ><img src={require("../assets/img/login.png")} alt="" /></a>
                    <span><a href="javascript:;" onClick={this.jump}>点击登录</a></span>
                </div>
                <ul>
                    {
                        this.state.asideList.map(function(msg,i){
                            return (
                                <AsideLi key={i} data={msg} index={i} quit={self.props.quit}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    },
    getInitialState(){
        return{
            asideList:[
                {href:'#/orderlist', src:require('../assets/img/myorder.png'), info:'我的订阅'},
                {href:'#/myedit/mylike?like', src:require('../assets/img/star.png'), info:'我的收藏'},
                {href:'#/myedit/mycomment?comment', src:require('../assets/img/fix_msg.png'), info:'我的评论'},
                {href:'#/sugguestion', src:require('../assets/img/suggestion.png'), info:'意见反馈'},
                {href:'javascript:;', src:require('../assets/img/quit.png'), info:'退出',}
            ],
            isactive:false
        }
    }
})