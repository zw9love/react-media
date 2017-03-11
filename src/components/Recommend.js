import React from 'react';
import '../assets/css/style_recommend.css'
import MyLine from './MyLine'

var Recommend=React.createClass({
    // componentDidMount(){
    //     console.log(this.props.data);
    // },
    render:function(){
        return (
            <div>
                <div className="media_info_contain">
                    <div className="media_info_left">
                        <a href="#/" >
                            <img src={require("../assets/img/p1.jpg")} alt="" />
                            <div className="media_info_movie">
                                <span></span>
                            </div>
                        </a>
                    </div>
                    <div className="media_info_right">
                        <p className="p1"><a href="#/" >卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney</a></p>
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

export default Recommend;