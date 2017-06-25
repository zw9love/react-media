import React from 'react';
import '../assets/css/style_recommend.css'
import { hashHistory } from 'react-router';
import $ from 'jquery'

export default React.createClass({
    jump(){
        if(this.props.isShow){
            $(window).scrollTop(0);
            // console.log(this.props.changePage);
            this.props.changePage(this.props.data.isMovie);
        }else{
            hashHistory.push({
                pathname: '/show',
                state:{
                    isMovie:this.props.data.isMovie
                }
            })
        }
    },
    getInitialState(){
        return{
            isMovie:this.props.data.isMovie
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
                        <p className="p1"><a href="javascript:;" onClick={this.jump} >{this.props.data.title}</a></p>
                        <p className="p2">#{this.props.data.author}</p>
                    </div>
                    <div className="media_info_icon">
                        <div className="media_info_eyes">
                            <img src={require("../assets/img/eyes.png")} alt="" />
                            <span>{this.props.data.eye_num}</span>
                        </div>
                        <div className="media_info_msg">
                            <img src={require("../assets/img/msg.png")} alt="" />
                            <span>{this.props.data.msg_num}</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        )
    }
})
