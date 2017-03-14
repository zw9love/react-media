import React from 'react'
import MyTitle from '../components/MyTitle'
import '../assets/css/style_common.css'
import '../assets/css/style_noComment.css'
import EditShadow from '../components/EditShadow'
// import { hashHistory } from 'react-router'
import Cookie from '../assets/js/Cookie'

export default React.createClass({
    componentDidMount(){
        Cookie.myCookie.setCookie('backHome',true)
    },
    edit(){
        var obj = this.refs.mychild;
        obj.setState({isactive:!obj.state.isactive})
        // this.refs.shadow.setState({isactive:!this.refs.shadow.state.isactive})
    },
    shadowState(){
        this.refs.shadow.setState({isactive:!this.refs.shadow.state.isactive});
    },
    getDom(){
        var obj = this.refs.mychild;
        obj.state.dom.remove();
    },
    noCommentState(){
        this.setState({noComment:true});
        this.refs.mytitle.setState({name:''})
    },
    render(){
        return(
            <div>
                <MyTitle title={this.state.myTitle}  name="编辑" ref="mytitle" edit={this.edit}/>

                <EditShadow ref="shadow" getDom={this.getDom} noCommentState={this.noCommentState} length={this.props.location.search.slice(1) === 'like' ? this.state.likeList.length : this.state.recommendList.length}/>

                <div className={this.state.noComment ? "no_comment" : "no_comment hide"}>
                    <p>暂无收藏内容</p>
                </div>

                <div className="container">
                    {
                        this.props.children && React.cloneElement(this.props.children, {
                            data:this.props.location.search.slice(1) === 'like' ? this.state.likeList : this.state.recommendList,
                            ref:'mychild',
                            shadowState:this.shadowState
                        })
                    }
                </div>
            </div>
        )
    },
    getInitialState(){
        return{
            noComment:false,
            myTitle:this.props.location.search.slice(1) === 'like'? '我的收藏' : '我的评论',
            likeList:[
                {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}}
            ],
            recommendList:[
                {
                    name: '曾威',
                    arr: [{name1: '曾威', name2: '', info: '单论得分能力，蜗壳虚过谁？？？！！！'}],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '刚刚',
                    like: '300',
                    msg: '300',
                    commentInfo: '科比布莱恩特，科比布莱恩特科比布莱恩特，科比布莱恩特科比布莱恩特科比布莱恩特'
                },
                {
                    name: '沈敏杰',
                    arr: [{name1: '沈敏杰', name2: '', info: '麦诗人啊！！！'}],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '30分钟前',
                    like: '400',
                    msg: '400',
                    commentInfo: '特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪特雷西麦克格雷迪'
                },
                {
                    name: '殷镇威',
                    arr: [{name1: '大熊有点帅', name2: '', info: '我勒个去啊，扣篮王卡特啊'}, {
                        name1: '静香有点靓',
                        name2: '',
                        info: '我勒个去啊，扣篮王卡特啊'
                    }, {name1: '大熊有点帅', name2: '静香有点靓', info: '我好想干你啊，射你一脸！！！'}, {
                        name1: '静香有点靓',
                        name2: '大熊有点帅',
                        info: '来啊，等你啊，谁怕谁啊'
                    }],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '1小时前',
                    like: '500',
                    msg: '500',
                    commentInfo: '文思卡特，文思卡特文思卡特，文思卡特文思卡特文思卡特'
                },
                {
                    name: '邓登攀',
                    arr: [{name1: '邓登攀', name2: '', info: 'AI最屌啦！！！', isactive: false}],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '2小时前',
                    like: '600',
                    msg: '600',
                    commentInfo: '阿伦艾弗森，阿伦艾弗森阿伦艾弗森，阿伦艾弗森阿伦艾弗森阿伦艾弗森'
                },
            ]
        }
    }
})