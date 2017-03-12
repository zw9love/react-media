import React from 'react';
import '../assets/css/style_share.css'
import Friend from '../assets/img/share_friend.png';
import QQ from '../assets/img/share_qq.png';
import Wechat from '../assets/img/share_wechat.png';
import Weibo from '../assets/img/share_weibo.png';
import Zone from '../assets/img/share_zone.png';

export default React.createClass({
    render(){
        var self=this;
        return(
            <div className="main_share">
                <ul>
                    <span>分享:</span>
                {
                    this.state.shareData.map(function(msg,i){
                        return (
                            <li key={i}>
                                <a href="#/">
                                    <img src={msg.src} alt="" />
                                    {/*<img src={require("../assets/img/share_friend.png")} alt=""/>*/}
                                </a>
                            </li>
                        )
                    })

                }

                </ul>
            </div>
        )
    },
    getInitialState(){
        return{
            shareData:[
                {href:'javascript:;',src:Friend},
                {href:'javascript:;',src:Friend},
                {href:'javascript:;',src:QQ},
                {href:'javascript:;',src:Wechat},
                {href:'javascript:;',src:Weibo},
                {href:'javascript:;',src:Zone}
            ],
            src:'../assets/img/share_friend.png'
        }
    }
})