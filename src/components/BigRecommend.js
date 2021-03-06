import React from 'react';
import '../assets/css/style_bigRecommend.css'
import { hashHistory } from 'react-router';

export default React.createClass({
    getInitialState(){
        return{
            isMovie:this.props.data.isMovie
        }
    },
    jump(){
        // console.log(this.props.data)
        hashHistory.push({
            pathname: '/show',
            state:{
                data:this.props.data
            }
        })
    },
    render:function(){
        return (
            <div>
                <div className={this.state.isMovie ? "media_info_big have_movie" : "media_info_big"} >
                        <p><a href="javascript:;" onClick={()=>{this.jump()}}>{this.props.data.title}</a></p>
                <a href="javascript:;" className="movie" onClick={()=>{this.jump()}}>
                    <img src={require("../assets/img/b1.jpg")} alt="" />
                    <div className="media_info_movie">
                        <span></span>
                    </div>
                </a>
                <div className="media_info_icon">
                    <div className="media_info_eyes">
                        <img src={require("../assets/img/eyes.png")} alt="" />
                            <span>{this.props.data.eye_num}</span>
                    </div>
                    <div className="media_info_msg">
                        <img src={require("../assets/img/msg.png")} alt="" />
                            <span>{this.props.data.msg_num}</span>
                    </div>
                    <p>#{this.props.data.author}</p>
                </div>
                </div>
                <div className="line"></div>
            </div>
        )
    }
})
