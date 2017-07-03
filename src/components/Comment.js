import React from 'react'
import '../assets/css/style_comment.css'

export default React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {
            isActive: this.props.data.data.length > 5 ? true : false,
            likeNum:Number(this.props.data.like_num),
            renderData:this.props.data['data'].slice(0, 5),
            data:this.props.data['data'],
            length:this.props.data['data'].length,
        }
    },
    componentDidMount(){

    },
    writeMessage(){
        if(!this.props.commentActive) return
        let show = this.context.store.getState().showTargetReducer
        this.context.store.dispatch({type: 'setCommentTarget', value: this})
        show.setState({placeholder:'我来说两句...',myComment:'',commentActive:true,shadowActive:true,textActive:true})
    },
    add(){
        if (this.isAdd || !this.props.commentActive)  return
        this.isAdd = !this.isAdd
        this.setState({likeNum: this.state.likeNum + 1})
    },
    more(){
        this.setState({renderData:this.state.data,length:0,isActive:false})
    },
    nameClick(name){
        if(!this.props.commentActive) return
        let show = this.context.store.getState().showTargetReducer
        this.context.store.dispatch({type: 'setCommentTarget', value: this})
        show.setState({placeholder:`回复：${name}`,myComment:'',commentActive:true,shadowActive:true,textActive:true})
    },
    renderReply(){
        let arr = []
        let data = this.state.renderData
        data.map((val,i)=>{
            arr.push(
                <p key={i}>
                    <span className="main_comment_name">
                        <a href="javascript:;" onClick={()=>{this.nameClick(val.name1)}}>{val.name1}</a>
                    </span>
                    {
                        val.name2 ? <span>回复</span> : null
                    }
                    <span className="main_comment_name">
                        <a href="javascript:;" onClick={()=>{this.nameClick(val.name2)}}> {val.name2}:</a>
                    </span>{val.info}
                </p>
            )
        })

        return arr
    },
    render(){
        return (
            <div className="main_contain">
                <div className="main_order main_admin">
                    <a href="javascript:;"><img src={require("../assets/img/order.png")} alt=""/></a>
                    <div className="main_order_info">
                        <p><a href="javascript:;">{this.props.data.author}</a></p>
                        <p>{this.props.data.time}</p>
                    </div>
                    <div className="main_comment">
                        <div className="main_comment_contain">
                            <span>{this.state.data.length}</span>
                            <a href="javascript:;" onClick={this.writeMessage}><img src={require("../assets/img/msg.png")} alt=""/></a>
                        </div>
                        <div className="main_comment_contain">
                            <span>{this.state.likeNum}</span>
                            <a href="javascript:;" onClick={this.add}><img src={require("../assets/img/like.png")} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="main_comment_msg">
                    <div className="main_comment_owner">
                        <p>{this.props.data.title}</p>
                        {
                            this.state.renderData.length > 0 ? (
                                    <div>
                                        <div className="line"></div>
                                        <div className="main_comment_other">
                                            {this.renderReply()}
                                            {/*<p v-for="(x,i) in renderData">*/}
                                            {/*<span className="main_comment_name">*/}
                                            {/*<a href="javascript:;" onClick="nameClick(x.name1)">{{x.name1}}</a>*/}
                                            {/*</span>*/}
                                            {/*<span v-if="x.name2">回复</span>*/}
                                            {/*<span className="main_comment_name">*/}
                                            {/*<a href="javascript:;" onClick="nameClick(x.name2)"> {{x.name2}}:</a>*/}
                                            {/*</span>{{x.info}}*/}
                                            {/*</p>*/}
                                        </div>
                                        <p className={this.state.isActive ? "more" : "more hide"}>
                                            <a href="javascript:;" onClick={this.more}>展开更多回复</a>
                                        </p>
                                        <div className="line"></div>
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
})