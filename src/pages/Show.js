import React, {Component} from 'react';
import '../assets/css/style_show.css'
import '../assets/css/style_modal.css'
import Order from '../components/Order'
import ShowText from '../components/ShowText'
import Share from '../components/Share'
import MyLine from '../components/MyLine'
import Recommend from '../components/Recommend'
import Comment from '../components/Comment'
import ShadowBottom from '../components/ShadowBottom'
import ShowTextArea from '../components/ShowTextArea'
import ShowMovie from '../components/ShowMovie'
import $ from 'jquery'

export default React.createClass({
    componentDidMount(){
        $(window).scrollTop(0)
    },
    getInitialState(){
        return {
            textList: {
                title: '我是文章详情页的title啊',
                orderObj: {
                    name: '时尚芭莎111',
                    lineShow: false,
                    time: '2016-07-04',
                    src: require('../assets/img/order.png')
                },
                arr: [
                    {
                        src: require("../assets/img/show_1.jpg"),
                        info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚111111'
                    },
                    {
                        src: require("../assets/img/show_1.jpg"),
                        info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚222222'
                    },
                    {
                        src: require("../assets/img/show_1.jpg"),
                        info: '每到夏季就会让我们不由自主的去选择白色的服装，因为白色不仅好看，也是最不吸热的颜色。我们也为了找寻这样的答案而寻找出了十位时尚333333'
                    }
                ]
            },
            hotRecommend: [
                {eyes: 777, msg: 777, ismovie: true, infoObj: {ismovie: true}},
                {eyes: 888, msg: 888, ismovie: false, infoObj: {ismovie: false}}
            ],
            commentList: [
                {
                    name: '曾威',
                    arr: [{name1: '曾威', name2: '', info: '单论得分能力，蜗壳虚过谁？？？！！！', isactive: false}],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '刚刚',
                    like: '300',
                    msg: '300',
                    commentInfo: '科比布莱恩特，科比布莱恩特科比布莱恩特，科比布莱恩特科比布莱恩特科比布莱恩特'
                },
                {
                    name: '沈敏杰',
                    arr: [{name1: '沈敏杰', name2: '', info: '麦诗人啊！！！', isactive: false}],
                    src: 'http://localhost:8080/src/assets/img/order.png',
                    time: '30分钟前',
                    like: '400',
                    msg: '400',
                    commentInfo: '特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪，特雷西麦克格雷迪特雷西麦克格雷迪特雷西麦克格雷迪'
                },
                {
                    name: '殷镇威',
                    arr: [{name1: '大熊有点帅', name2: '', info: '我勒个去啊，扣篮王卡特啊', isactive: false}, {
                        name1: '静香有点靓',
                        name2: '',
                        info: '我勒个去啊，扣篮王卡特啊', isactive: false
                    }, {name1: '大熊有点帅', name2: '静香有点靓', info: '我好想干你啊，射你一脸！！！', isactive: true}, {
                        name1: '静香有点靓',
                        name2: '大熊有点帅',
                        info: '来啊，等你啊，谁怕谁啊', isactive: true
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
            ],
            shadowActive: false,
            modalMsg:'',
            ismodal:false,
            modalStyle:{},
            isShow:true,
            title:'零售商们致力于将双十一打造成奢侈品的黑色星期五66666'
        }
    },
    changeActive(){
        this.setState({shadowActive: !this.state.shadowActive})
    },
    changeShow(){
        this.setState({shadowActive: !this.state.shadowActive})
        var obj = this.refs.textarea;
        obj.setState({isactive: !obj.state.isactive})
        obj.refs.text.focus();
    },
    backShow(){
        this.refs.showbottom.changeShow();
    },
    modalShow(msg){
        this.setState({ismodal:!this.state.ismodal});
        if(msg){
            this.setState({modalMsg:msg});
        }
    },
    changeModalStyle(val){
        this.setState({modalStyle:val});
    },
    changePage(val){
        this.refs.showmovie.setState({isactive:val})
        this.refs.showtext.setState({isactive:!val})
    },
    render(){
        let self = this;
        return (
            <div id="show">
                <div className={this.state.ismodal ? "modal active" : "modal"} style={this.state.modalStyle}><div>{this.state.modalMsg}</div></div>
                <ShowMovie isactive={this.props.location.state.isMovie} ref="showmovie"/>
                <section className="main">
                    <p className="main_title">{this.state.title}</p>
                    <Order modalShow={this.modalShow} changeModalStyle={this.changeModalStyle} data={this.state.textList.orderObj}/>
                    {/*<MyLine />*/}
                    <ShowText data={this.state.textList.arr} isactive={!this.props.location.state.isMovie} ref="showtext"/>
                    <p className="read_all"><a href="javascript:;">阅读原文</a></p>
                    <Share />
                    <MyLine />
                    <p className="same_read">相关阅读</p>
                    {
                        this.state.hotRecommend.map(function (msg, i) {
                            return (
                                <Recommend key={i} data={msg} isShow={self.state.isShow} changePage={self.changePage}/>
                            )
                        })
                    }
                    <p className="same_read">热门评论</p>
                    {
                        this.state.commentList.map(function (msg, i) {
                            return (
                                <Comment key={i} data={msg}/>
                            )
                        })
                    }
                </section>
                <MyLine />
                <ShadowBottom changeActive={this.changeActive} changeShow={this.changeShow} modalShow={this.modalShow} changeModalStyle={this.changeModalStyle} ref="showbottom"/>
                <div className={this.state.shadowActive ? "shadow" : "shadow hide"}></div>
                <ShowTextArea ref="textarea" backShow={this.backShow}/>
            </div>
        )
    }
})