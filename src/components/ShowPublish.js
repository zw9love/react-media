import React from 'react'
import { hashHistory } from 'react-router';

export default React.createClass({

    getInitialState(){
        return{
            cancelActive:false,
            mySrc:require("../assets/img/star.png"),
            islike:false,
            isOrder:false
        }
    },
    shareClick(){
        this.setState({cancelActive:!this.state.cancelActive})
        this.props.changeActive();
    },
    speackClick(){
        this.props.changeShow();
    },
    like(){
        if(this.state.isOrder) return;
        this.setState({isOrder:true})
        this.state.islike =! this.state.islike;
        this.props.changeModalStyle({zIndex:10000})
        if(this.state.islike){
            this.setState({mySrc:require("../assets/img/star_hover.png")})
            this.props.modalShow('已添加收藏');
        }else{
            this.setState({mySrc:require("../assets/img/star.png")})
            this.props.modalShow('已取消收藏');
        }
        let self = this;
        setTimeout(function(){
            self.props.modalShow();
            setTimeout(function(){
                self.setState({isOrder:false})
                self.props.changeModalStyle({})
            },600)
        },1000)
    },
    back(){
        hashHistory.go(-1);
    },
    render(){
        return(
            <ul>
                <li className={this.state.cancelActive ? "hide" : ""}><a href="javascript:;" onClick={this.back}><img src={require("../assets/img/back.png")} alt="" className="back" /></a></li>
                <li className={this.state.cancelActive ? "hide" : ""}>
                    <div className="comment_txt" onClick={this.speackClick}>
                        <span></span>
                        <span>发表伟大言论...</span>
                    </div>
                </li>
                <li onClick={this.shareClick} className={this.state.cancelActive ? "hide" : ""}><a href="javascript:;"><img src={require("../assets/img/fix_share.png")} alt="" /></a></li>
                <li className={this.state.cancelActive ? "hide" : ""}><a href="javascript:;" onClick={this.like}><img src={this.state.mySrc} alt="" /></a></li>
                <li className={this.state.cancelActive ? "hide" : ""}><a href="javascript:;" onClick={this.speackClick}><img src={require("../assets/img/fix_msg.png")} alt="" /><span className="num">666</span></a></li>
                <div className={this.state.cancelActive ? "cancle" : "cancle hide"} onClick={this.shareClick}>
                    <a href="javascript:;">取消</a>
                </div>
             </ul>
        )
    }
})