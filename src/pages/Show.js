import React, {Component} from 'react';
import '../assets/css/style_show.css'
import Order from '../components/Order'

import Recommend from '../components/Recommend'
import Comment from '../components/Comment'
import $ from 'jquery'
import Mock from 'mockjs'
import {myScroll,unScroll} from '../tool/Scroll'
import {hashHistory} from 'react-router'

export default React.createClass({
    componentDidMount(){
        console.log(this.state.data)
        $(window).scrollTop(0)
        this.renderRecommendData()
        this.renderCommentData()
        myScroll(this, {'data_name': 'commentData', 'fn_name': 'renderCommentData', 'num': 30})
    },
    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    },
    getInitialState(){
        return {
            recommendData: [],
            commentData: [],
            data:this.props.location.state.data,
            active: true,
            shareActive: false,
            shadowActive: false,
            textActive: false,
            starActive: false,
            commentActive: false,
            myComment: '',
            placeholder: '我来说两句...',
            txtTarget:null
        }
    },
    goBack(){
        hashHistory.go(-1)
    },
    textClick(){
        // this.txtTarget.focus()
        this.setState({textActive:true,commentActive:false,shadowActive:true,placeholder:'我来说两句...',myComment:''})
    },
    shareClick(){
        this.setState({active:false,shareActive:true,shadowActive:true})
    },
    cancel(){
        this.setState({active:true,shareActive:false,shadowActive:false})
    },
    starClick(){
        // let maskLock = this.$store.getters.getMaskLock
        // if (maskLock) return
        // let action = {type: 'setMaskLock', value: true}
        // this.$store.dispatch(action)
        // this.starActive = !this.starActive
        // let mask = this.$store.getters.getMask
        // mask.msg = this.starActive ? '已添加收藏' : '已取消收藏'
        // mask.toggleActive()
    },
    sureText(){
        this.setState({shadowActive:false,textActive:false})
    },
    cancelText(){
        this.setState({shadowActive:false,textActive:false})
    },
    renderTextArea(){
        if(this.state.textActive){
            return(
                <div className="text">
                    <div className="btn1">
                        <span><a href="javascript:;" onClick={()=>{this.cancelText()}}>取消</a></span>
                    </div>
                    <div className="btn2">
                        <span><a href="javascript:;" onClick={()=>{this.sureText()}}>发表</a></span>
                    </div>
                    <textarea id="txt" placeholder={this.state.placeholder}  ref="txt" />
                </div>
            )
        }else{
            return null
        }
    },
    renderShare(){
        if(this.state.shareActive){
            return (
                <div className="comment_fixed share-fixed">
                    <div className="comment_fixed_hide">
                        <div className="comment_fixed_contain">
                            <ol>
                                <li><img src={require("../assets/img/share_weibo.png")} alt="" /><br/>
                                    <span>新浪微博</span></li>
                                <li><img src={require("../assets/img/share_wechat.png")} alt="" /><br/>
                                    <span>微信好友</span></li>
                                <li><img src={require("../assets/img/share_friend.png")} alt="" /><br/>
                                    <span>朋友圈</span></li>
                            </ol>
                            <ol>
                                <li><img src={require("../assets/img/share_qq.png")} alt="" /><br/>
                                    <span>QQ</span></li>
                                <li><img src={require("../assets/img/share_zone.png")} alt="" /><br/>
                                    <span>QQ空间</span></li>
                                <li><img src={require("../assets/img/share_copy.png")} alt="" /><br/>
                                    <span>复制链接</span></li>
                            </ol>
                        </div>
                    </div>
                    <div className="cancle" onClick={()=>{this.cancel()}}>
                        <a href="javascript:;" id="cancel">取消</a>
                    </div>
                </div>
            )
        }else{
            return null
        }
    },
    renderBottom(){
        if(this.state.active){
            return(
                <div className="comment_fixed" >
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src={require("../assets/img/back.png")} alt="" className="back" onClick={()=>{this.goBack()}} />
                            </a>
                        </li>
                        <li onClick={()=>{this.textClick()}}>
                            <div className="comment_txt">
                                <span></span>
                                <span>发表伟大言论...</span>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;" onClick={()=>{this.shareClick()}}>
                                <img src={require("../assets/img/fix_share.png")} alt="" id="share" />
                            </a>
                        </li>
                        {
                            this.state.starActive ? (
                                <li>
                                    <a href="javascript:;" onClick={()=>{this.starClick()}}>
                                        <img src={require("../assets/img/star_hover.png")} alt="" />
                                    </a>
                                </li>
                            ):
                            (
                                <li>
                                    <a href="javascript:;" onClick={()=>{this.starClick()}}>
                                        <img src={require("../assets/img/star.png")} alt="" />
                                    </a>
                                </li>
                            )
                        }
                        <li>
                            <a href="javascript:;" onClick={()=>{this.textClick()}}>
                                <img src={require("../assets/img/fix_msg.png")} alt="" style={{width: 30}} />
                                <span className="num">666</span>
                            </a>
                        </li>
                    </ul>

                </div>
            )
        }else{
            return null
        }
    },
    renderCommentData(){
        let data = Mock.mock({
            'list|5': [{
                'title': '@ctitle(5,100)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'like_num|0-999': 0,
                'time': '@integer(1, 24)' + '小时之前',
                // 评论的条数
                'data|0-30': [{
                    'name1': '@cname(0,4)',
                    'name2': '@cname(0,4)',
                    'info': '@ctitle(5,50)'
                }]
            }],
        }).list

        this.setState({commentData:this.state.commentData.concat(data)})

    },
    renderCommentCell(){
        let arr = []
        let data = this.state.commentData
        data.map((x,i)=>{
            arr.push(
                <Comment data={x} key={i} commentActive={true} />
            )
        })

        return arr
    },
    renderRecommendData() {
        let data = Mock.mock({
            'list|4': [{
                'title': '@ctitle(6,100)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'eye_num|0-999': 0,
                'isMovie': '@boolean',
                'id': '@id'
            }],
        }).list

        this.setState({recommendData:data})
    },
    renderRecommendCell(){
        let data = this.state.recommendData
        let arr = []
        data.map((x,i)=>{
            arr.push(
                <Recommend data={x} key={i}/>
            )
        })

        return arr
    },
    renderMainCell(){
        let data = this.state.data.infoData
        let arr = []
        data.map((x,i)=>{
            arr.push(
                <div key={i}>
                    {
                        x.info ? (
                            <p>{x.info}</p>
                        ): null
                    }
                    {
                        x.src ? (
                            <div className="main_info_img" >
                                <img src={x.src} alt="" />
                            </div>
                        ) : null
                    }
                </div>
            )
        })

        return arr
    },
    renderMain(){
        // 电影块
        if(this.state.data.isMovie){
            return (
                <div className="movie">
                    <video src={require("../assets/video/go.mp4")} id="video" />
                    <img src={require("../assets/img/movie.jpg")} alt="" />
                        <a href="javascript:;">
                            <div className="media_info_movie">
                                <span />
                            </div>
                        </a>
                        <div className="line"></div>
                </div>
            )
        }else{
            return (
                <div>
                    <div className="main_info">
                        {this.renderMainCell()}
                    </div>
                    <p className="read_all">
                        <a href="javascript:;">阅读原文</a>
                    </p>
                </div>
            )
        }
    },
    render(){
        return (
            <div id="show">
                <section className="main">
                    <p className="main_title">{this.state.data.title}</p>
                    <div className="line"></div>
                    <div className="main_order main_sp">
                        <a href="javascript:;">
                            <img src={require("../assets/img/order.png")} alt="" />
                        </a>
                        <div className="main_order_info">
                            <p><a href="javascript:;">{this.state.data.author}</a></p>
                            <p>{this.state.data.time}</p>
                        </div>

                    </div>
                    <div className="line"></div>
                    {this.renderMain()}
                    <div className="main_share">
                        <ul>
                            <span>分享:</span>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_friend.png")} alt="" /></a></li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_friend.png")} alt=""/></a></li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_qq.png")} alt=""/></a></li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_wechat.png")} alt=""/></a></li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_weibo.png")} alt=""/></a></li>
                            <li><a href="javascript:;"><img src={require("../assets/img/share_zone.png")} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <p className="same_read">
                        相关阅读
                    </p>
                    {this.renderRecommendCell()}
                    <p className="same_read">
                        热门评论
                    </p>
                    <div className="container" style={{margin:0}}>
                        {this.renderCommentCell()}
                    </div>
                </section>
                {this.renderBottom()}
                {this.renderShare()}
                {this.renderTextArea()}
            </div>
        )
    }
})