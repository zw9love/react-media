import React from 'react';
import '../assets/css/style_bigrecommend.css'
import MyLine from './MyLine'

var BigRecommend = React.createClass({
    componentDidMount(){
        // console.log(this.props.data);
    },
    render:function(){
        return (
            <div>
                <div className="media_info_big" >
                        <p><a href="#/" >欧洲杯期间，穿的美美的看球才是正经事</a></p>
                <a href="#/" className="movie" ><img src={require("../assets/img/b1.jpg")} alt="" />
                    <div className="media_info_movie">
                        <span></span>
                    </div>
                </a>
                <div className="media_info_icon">
                    <div className="media_info_eyes">
                        <img src={require("../assets/img/eyes.png")} alt="" />
                            <span>{this.props.data.eyes}</span>
                    </div>
                    <div className="media_info_msg">
                        <img src={require("../assets/img/msg.png")} alt="" />
                            <span>{this.props.data.msg}</span>
                    </div>
                    <p>时尚芭莎</p>
                </div>
                </div>
                <MyLine />
            </div>
        )
    }
})

export default BigRecommend