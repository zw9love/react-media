import React from 'react'
import '../assets/css/style_mytitle.css'
import { hashHistory } from 'react-router'

export default React.createClass({
    render(){
        return(
            <div className="page_header">
                <div className="back" onClick={this.back}>
                    <img src={require("../assets/img/back.png")} alt="" />
                </div>
                <span>{this.props.title}</span>
                <span className="move" onClick={this.edit}><a href="javascript:;">{this.state.name}</a></span>
            </div>
        )
    },
    back(){
        hashHistory.go(-1)
    },
    edit(){
        this.props.edit();
        this.state.flag = ! this.state.flag
        this.state.flag ? this.setState({name:'取消'}) : this.setState({name:'编辑'})
    },
    getInitialState(){
        return{
            name:this.props.name,
            flag:false
        }
    }
})