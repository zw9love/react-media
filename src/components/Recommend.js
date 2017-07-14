import React from 'react';
import styles from '../assets/css/style_recommend.css'
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
                <div className={this.state.isMovie ? `${styles.media_info_contain} ${styles.have_movie}`  : styles.media_info_contain}>
                    <div className="media_info_left">
                        <a href="javascript:;" onClick={()=>{this.jump()}}>
                            <img src={require("../assets/img/p1.jpg")} alt="" />
                            <div className="media_info_movie">
                                <span></span>
                            </div>
                        </a>
                    </div>
                    <div className="media_info_right">
                        <p className="p1"><a href="javascript:;" onClick={()=>{this.jump()}} >{this.props.data.title}</a></p>
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
