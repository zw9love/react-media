/**
 * Created by zengwei on 2017/6/30.
 */
import React, {Component} from 'react';
import MyTitle from '../components/MyTitle'
// import Recommend from '../components/Recommend'
import Comment from '../components/Comment'
import MyShadow from '../components/MyShadow'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'

export default class MyComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editActive: false,
            commendData: [],
            shadowTitle: '确定要删除这条评论吗？',
            editIndex: ''
        }

        this.renderCommendData = this.renderCommendData.bind(this)
        this.renderCommendCell = this.renderCommendCell.bind(this)
        this.editClick = this.editClick.bind(this)
    }

    componentDidMount() {
        this.context.store.dispatch({type: 'setEditTarget', value: this})
        this.renderCommendData()
        myScroll(this, {'data_name': 'commendData', 'fn_name': 'renderCommendData', 'num': 30})
    }

    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    }

    // 渲染推荐块数据
    renderCommendData() {
        let data = Mock.mock({
            'list|5': [{
                'title': '@ctitle(5,100)',
                'author': '@cword(2,8)',
                'msg_num|0-999': 0,
                'like_num|0-999': 0,
                'time|': '@integer(1, 24)' + '小时之前',
                // 评论的条数
                'data|0-30': [{
                    'name1': '@cname(0,4)',
                    'name2': '@cname(0,4)',
                    'info': '@ctitle(5,50)'
                }]
            }],
        }).list

        this.setState({commendData: this.state.commendData.concat(data)})

        // console.log(JSON.stringify(data, null, 4))
    }


    editClick(index) {
        this.setState({editIndex: index})
        let shadow = this.context.store.getState().myShadowReducer
        shadow.setState({shadowActive:true})
    }

    renderCommendCell() {
        let arr = []
        let data = this.state.commendData
        data.forEach((val, i) => {
            arr.push(
                <div className={i == 0 ? 'isFirst' : ''} key={i}>
                    <div className="comment">
                        {
                            this.state.editActive ? (
                                    <div className="comment_left" onClick={() => {
                                        this.editClick(i)
                                    }}>
                                        <div>
                                            <span></span>
                                        </div>
                                    </div>
                                ) : null
                        }
                        <div className="comment_right">
                            <Comment data={val}/>
                        </div>
                    </div>
                </div>
            )
        })

        return arr
    }

    render() {
        return (
            <div>
                <MyTitle title="我的评论"/>
                <div className="container">
                    <MyShadow title={this.state.shadowTitle} editActive={true}/>
                    {
                        this.state.commendData.length == 0 ? (
                                <div className="no_comment">
                                    <p>暂无评论内容</p>
                                </div>
                            ) : null
                    }
                    {this.renderCommendCell()}
                </div>
            </div>
        )
    }
}

MyComment.contextTypes = {
    store: React.PropTypes.object.isRequired
}