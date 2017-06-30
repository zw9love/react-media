/**
 * Created by zengwei on 2017/6/30.
 */
import React, {Component} from 'react';
import MyTitle from '../components/MyTitle'
import Recommend from '../components/Recommend'
import MyShadow from '../components/MyShadow'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'

export default class MyLike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editActive: false,
            recommendData: [],
            shadowTitle: '确定要删除这条收藏吗？',
            editIndex: ''
        }

        this.renderRecommendData = this.renderRecommendData.bind(this)
        this.renderRecommendCell = this.renderRecommendCell.bind(this)
        this.editClick = this.editClick.bind(this)
    }

    componentDidMount() {
        this.context.store.dispatch({type: 'setEditTarget', value: this})
        this.renderRecommendData()
        myScroll(this, {'data_name': 'recommendData', 'fn_name': 'renderRecommendData', 'num': 100})
    }

    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    }

    // 渲染推荐块数据
    renderRecommendData() {
        let data = Mock.mock({
            'list|10': [
                {
                    'id': '@id',
                    'title': '@ctitle(6,50)',
                    'author': '@cword(2,8)',
                    'msg_num|0-999': 0,
                    'eye_num|0-999': 0,
                    'isMovie': '@boolean',
                    'isOrder': '@boolean',
                    'time': '@datetime("yyyy-MM-dd")',
                    'src': '../assets/img/order.png',
                    'infoData|1-5': [{
                        'info': '@cparagraph()',
                        'src': require('../assets/img/show_1.jpg')
//                  'src': '../assets/img/show_' + '@integer(1, 3)' + '.jpg'
                    }]
                },
            ]
        }).list

        this.setState({recommendData: this.state.recommendData.concat(data)})

        // console.log(JSON.stringify(this.state.recommendData, null, 4))
    }


    editClick(index) {
        this.setState({editIndex: index})
        let shadow = this.context.store.getState().myShadowReducer
        shadow.setState({shadowActive:true})
    }

    renderRecommendCell() {
        let arr = []
        let data = this.state.recommendData
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
                            <Recommend data={val}/>
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
                <MyTitle title="我的收藏"/>
                <div className="container">
                    <MyShadow title={this.state.shadowTitle} editActive={true}/>
                    {
                        this.state.recommendData.length == 0 ? (
                                <div className="no_comment">
                                    <p>暂无收藏内容</p>
                                </div>
                            ) : null
                    }
                    {this.renderRecommendCell()}
                </div>
            </div>
        )
    }
}

MyLike.contextTypes = {
    store: React.PropTypes.object.isRequired
}

