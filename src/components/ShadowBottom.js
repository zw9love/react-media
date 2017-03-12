import React from 'react'
import ShowPublish from './ShowPublish'
import '../assets/css/style_fixed.css'

export default React.createClass({
    getInitialState(){
        return{
            shareList:[
                [
                    {name:'新浪微博',src:require('../assets/img/share_weibo.png')},
                    {name:'微信好友',src:require('../assets/img/share_wechat.png')},
                    {name:'朋友圈',src:require('../assets/img/share_friend.png')},
                ],
                [
                    {name:'QQ',src:require('../assets/img/share_qq.png')},
                    {name:'QQ空间',src:require('../assets/img/share_zone.png')},
                    {name:'复制链接',src:require('../assets/img/share_copy.png')},
                ]
            ],
            shareActive:false,
            isShow:true
        }
    },
    changeActive(){
        this.setState({shareActive:!this.state.shareActive})
        this.props.changeActive();
    },
    changeShow(){
        this.setState({isShow:!this.state.isShow})
        this.props.changeShow();
    },
    render(){
        return(
            <div className={this.state.isShow ? "comment_fixed" : "comment_fixed hide"} >
                <div className={this.state.shareActive ? "comment_fixed_hide" : "comment_fixed_hide hide"} >
                    <div className="comment_fixed_contain">
                        {
                            this.state.shareList.map(function(msg,i){
                                return (
                                        <ol key={i}>
                                            {
                                                msg.map(function(msg2,i2){
                                                    return (
                                                        <li key={i2}>
                                                            <img src={msg2.src} alt="" />
                                                            <span><br/>{msg2.name}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    )
                            })
                        }
                    </div>
                </div>
                <ShowPublish changeActive={this.changeActive} changeShow={this.changeShow} modalShow={this.props.modalShow} changeModalStyle={this.props.changeModalStyle}/>
            </div>
        )
    }
})