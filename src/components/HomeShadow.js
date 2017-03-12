import React from 'react'
import '../assets/css/style_homeShadow.css'
import $ from 'jquery'

export default React.createClass({
    componentDidMount(){
        let obj= $(this.refs.self)
        obj.height($(window).height())
        $(window).scroll(function(){
            obj.css('top',$(this).scrollTop());
        });
    },
    getInitialState(){
        return{
            isactive:false
        }
    },
    cancel(){
        this.props.quit();
    },
    render(){
        return(
            <div className={this.state.isactive ? "homeshadow show" : "homeshadow"} ref="self">
                <div className="model">
                    <div className="model_info">
                        <p>退出登录</p>
                        <p>退出当前账号，将不能同步收藏发布评论和分享等</p>
                    </div>
                    <div className="model_button">
                        <button className="cancel" onClick={this.cancel}>取消</button>
                        <button className="sure"  onClick={this.cancel}>确定</button>
                    </div>
                </div>
             </div>
        )
    }
})