import React from 'react';
import '../assets/css/style_recommend.css'
import MyLine from './MyLine'
import { hashHistory } from 'react-router';
import $ from 'jquery'
// import { router, Route, hashHistory } from 'react-router'

export default React.createClass({
    jump(){
        if(this.props.isShow){
            $(window).scrollTop(0);
            // console.log(this.props.changePage);
            this.props.changePage(this.props.data.ismovie);
        }else{
            hashHistory.push({
                pathname: '/show',
                state:{
                    isMovie:this.props.data.ismovie
                }
            })
        }
    },
    getInitialState(){
        return{
            isMovie:this.props.data.ismovie
        }
    },
    render:function(){
        return (
            <div>
                <div className={this.state.isMovie ? "media_info_contain have_movie" : "media_info_contain"}>
                    <div className="media_info_left">
                        <a href="javascript:;" onClick={this.jump}>
                            <img src={require("../assets/img/p1.jpg")} alt="" />
                            <div className="media_info_movie">
                                <span></span>
                            </div>
                        </a>
                    </div>
                    <div className="media_info_right">
                        <p className="p1"><a href="javascript:;" onClick={this.jump} >卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney</a></p>
                        <p className="p2">时尚芭莎</p>
                    </div>
                    <div className="media_info_icon">
                        <div className="media_info_eyes">
                            <img src={require("../assets/img/eyes.png")} alt="" />
                            <span>{this.props.data.eyes}</span>
                        </div>
                        <div className="media_info_msg">
                            <img src={require("../assets/img/msg.png")} alt="" />
                            <span>{this.props.data.msg}</span>
                        </div>
                    </div>
                </div>
                <MyLine />
            </div>
        )
    }
})
