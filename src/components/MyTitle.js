import React from 'react'
import '../assets/css/style_myTitle.css'
import {hashHistory} from 'react-router'

export default React.createClass({
    getInitialState(){
        return {
            name: '编辑'
        }
    },
    contextTypes:{
        store: React.PropTypes.object.isRequired
    },
    componentDidMount(){
        // this.flag = false
    },
    back(){
        hashHistory.go(-1)
    },
    edit(){
        let edit = this.context.store.getState().editTargetReducer
        edit.setState({editActive:!edit.state.editActive})
        this.flag = !this.flag
        this.flag ? this.setState({name: '取消'}) : this.setState({name: '编辑'})
    },
    render(){
        return (
            <div className='page_header' style={{margin: 0}}>
                <div className="back" onClick={this.back}>
                    <img src={require("../assets/img/back.png")} alt=""/>
                </div>
                <span className="page-title">{this.props.title}</span>
                <span className="page-edit" onClick={this.edit}><a href="javascript:;">{this.state.name}</a></span>
            </div>
        )
    }
})