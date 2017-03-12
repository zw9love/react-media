import React from 'react'
import MyLine from './MyLine'
import CommentLi from './CommentLi'
import '../assets/css/style_comment.css'

export default React.createClass({
    getInitialState(){
        return {
            isactive:this.props.data.arr.length >= 4 ? true : false,
            like:Number(this.props.data.like),
            isAdd:false
        }
    },
    add(){
        if(this.state.isAdd)  return
        this.state.isAdd=!this.state.isAdd
        this.setState({like:this.state.like + 1})
    },
    render(){
        return (
            <div className="main_contain">
                <div className="main_order main_admin">
                    <a href="javascript:;"><img  src={require("../assets/img/order.png")} alt=""/></a>
                    <div className="main_order_info">
                        <p><a href="javascript:;">{this.props.data.name}</a></p>
                        <p>{this.props.data.time}</p>
                    </div>
                    <div className="main_comment">
                        <div className="main_comment_contain">
                            <span>{this.props.data.msg}</span>
                            <a href="javascript:;"><img src={require("../assets/img/msg.png")} alt="" /></a>
                        </div>
                        <div className="main_comment_contain">
                            <span>{this.state.like}</span>
                            <a href="javascript:;" onClick={this.add}><img src={require("../assets/img/like.png")} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="main_comment_msg">
                    <div className="main_comment_owner">
                        <p>{this.props.data.commentInfo}</p>
                        <div>
                            <MyLine />
                            <div className="main_comment_other">
                                {
                                    this.props.data.arr.map(function(msg,i){
                                        return (
                                            <CommentLi  key={i} data={msg} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <p className={this.state.isactive ? "more" : "more hide"}><a href="javascript:;">展开更多回复</a></p>
                            <MyLine />
                        </div>
                    </div>
                </div>
        </div>
        )
    }
})