import React, {Component} from 'react';
import '../assets/css/style_home.css';
import Recommend from '../components/Recommend'
import BigRecommend from '../components/BigRecommend'
import MyShadow from '../components/MyShadow'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'
import { hashHistory } from 'react-router'


class App extends Component {
    constructor(props) {
        super(props);
        this.moreInfo = this.moreInfo.bind(this);
        this.renderRecommendData = this.renderRecommendData.bind(this);
        this.renderMain = this.renderMain.bind(this);
        this.renderSecondMain = this.renderSecondMain.bind(this);
        this.renderFirstNavData = this.renderFirstNavData.bind(this);
        this.renderFirstNav = this.renderFirstNav.bind(this);
        this.firstNavClick = this.firstNavClick.bind(this);
        this.renderAside = this.renderAside.bind(this);
        this.asideClick = this.asideClick.bind(this);
        this.goLogin = this.goLogin.bind(this);
    }

    state = {
        recommendData: [],
        firstNavData: [],
        index: 10000,
        activeIndex: 0,
        asideActive: false,
        backHome: null,
        lock: false,
        asideData: [
            {href: '#/myOrder', src: require('../assets/img/myorder.png'), name: '我的订阅'},
            {href: '#/myLike', src: require('../assets/img/star.png'), name: '我的收藏'},
            {href: '#/myComment', src: require('../assets/img/fix_msg.png'), name: '我的评论'},
            {href: '#/sugguestion', src: require('../assets/img/suggestion.png'), name: '意见反馈'},
            {href: 'javascript:;', src: require('../assets/img/quit.png'), name: '退出',}
        ],
        asideStyle: {},
        shadowTitle: '是否确定退出？'
    }

    componentWillMount() {
        // $('html,body').css({
        //     'perspective': '600px',
        //     '-webkit-perspective': '600px'
        // });

        this.setState({backHome: this.props.location.state})
    }

    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
        $('body').removeClass('body')
        $('html').removeClass('html')
        // $('html,body').css({
        //     'perspective': 'none',
        //     '-webkit-perspective': 'none'
        // });
    }

    // 组件的state值被更新
    // componentWillUpdate(nextProps,nextState){
    //     // console.log(nextState.index);
    //     console.log('home的值被修改')
    // }

    // 组件dom结构加载完成
    componentDidMount() {
        hashHistory.push('/')
        this.renderFirstNavData()
        this.renderRecommendData()
        myScroll(this, {'data_name': 'recommendData', 'fn_name': 'renderRecommendData', 'num': 100})
        // console.log(1)
        // if(Cookie.myCookie.getCookie('backHome')) this.moreInfo(true) ;
        // Cookie.myCookie.deleteCookie('backHome');
        var id = this.props.params.id;
        if (!id) return;
        this.refs.firstnav.refs.mynav.refs['li' + id].handleClick();
    }

    // 点击更多信息图标
    moreInfo(val) {

        if (this.state.asideActive == val) return

        if (this.state.asideActive) {
            clearInterval(this.timer)
            this.timer = setTimeout(() => {
                $('body').removeClass('body')
                $('html').removeClass('html')
            }, 800)
        } else {
            $('body').addClass('body')
            $('html').addClass('html')
        }

        let scrollTop = $(window).scrollTop()

        this.setState({asideActive: val, asideStyle: {'top': scrollTop + 'px'}})
    }

    asideClick(index) {
        if (index == this.state.asideData.length - 1) {
            let shadow = this.context.store.getState().myShadowReducer
            shadow.setState({shadowActive: true})
        }
    }

    test(val, e) {
        console.log(val)
        console.log(e.target)
    }

    goLogin(){
        hashHistory.push('/loginList')
    }

    firstNavClick(index) {
        if (index == this.state.activeIndex) return
        let data = Mock.mock({
            'list|3': [{
                'list|4': [
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
                        }]
                    },
                ]
            }],
        }).list
        this.setState({activeIndex: index, recommendData: data})
    }

    // 渲染侧边栏
    renderAside() {
        let arr = []
        let data = this.state.asideData
        data.forEach((data, i) => {
            arr.push(
                <div key={i}>
                    <a href={data.href} onClick={() => {
                        this.asideClick(i)
                    }}>
                        <li>
                            <img src={data.src} alt=""/>
                            <span>{data.name}</span>
                        </li>
                    </a>
                    <div className="line"/>
                </div>
            )
        })

        return arr
    }


    // 渲染推荐块数据
    renderRecommendData() {
        let data = Mock.mock({
            'list|3': [{
                'list|4': [
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
            }],
        }).list

        this.setState({recommendData: this.state.recommendData.concat(data)})

        // console.log(JSON.stringify(this.state.recommendData, null, 4))
    }

    //渲染一级导航数据
    renderFirstNavData() {
        let data = Mock.mock({
            'list|30': [{
                'name': '@cword(2, 5)',
            }],
        }).list

        this.setState({firstNavData: data})
    }

    // 渲染一级导航
    renderFirstNav() {
        let data = this.state.firstNavData
        let arr = []
        let href = ''
        data.forEach((msg, i) => {
            switch(i){
                case 0:
                    href = '#/'
                    break
                case 1:
                    href = '#/home/industry'
                    break
                case 2:
                    href = '#/home/order'
                    break
                default:
                    href = '#/'
            }
            arr.push(
                <li key={i} onClick={() => {
                    this.firstNavClick(i)
                }}>
                    <a href={href} className={this.state.activeIndex == i ? 'current' : ''}>{msg.name}</a>
                </li>
            )
        })
        return arr
    }


    // 第二层循环
    renderSecondMain(data) {
        let arr = []
        data.forEach((msg, index) => {
            // console.log(msg)
            if (index < 3) {
                arr.push(<Recommend data={msg} key={index}/>)
            } else {
                arr.push(<BigRecommend data={msg} key={index}/>)
            }
        })

        return arr
    }

    // 第一层循环
    renderMain() {
        let arr = []
        let data = this.state.recommendData
        data.forEach((msg, i) => {
            arr.push(
                <div className="main-data" key={i}>
                    {this.renderSecondMain(msg.list)}
                </div>
            )
        })

        return arr
    }

    render() {
        return (
            <div className="home">
                {/*<!--侧边栏-->*/}
                <div className={this.state.asideActive ? 'aside go_aside' : 'aside'} style={this.state.asideStyle}>
                    <div className="login_head">
                        <a href="javascript:;" onClick={this.goLogin}><img src={require("../assets/img/login.png")} alt=""/></a>
                        <span><a href="javascript:;" onClick={this.goLogin}>点击登录</a></span>
                    </div>
                    <ul>
                        {this.renderAside()}
                    </ul>
                </div>
                {/*<MyAside ref="myaside" quit={this.quit} myself={this}/>*/}
                {/*<HomeShadow ref="homeshadow" quit={this.quit}/>*/}
                {/*<h1 onClick={this.test.bind(this,20)}>测试一下</h1>*/}
                <MyShadow title={this.state.shadowTitle}/>
                <div className={this.state.asideActive ? "container go_contain" : "container"}
                     style={{'margin': '0 auto'}}>
                    <div className={this.state.asideActive ? "contain_shadow go_shadow" : "contain_shadow"}
                         onClick={() => {
                             this.moreInfo(false)
                         }}></div>
                    {/*一级导航*/}
                    <div className="header_contain">
                        <header className="media_header">
                            <a href="javascript:;" onClick={() => {this.moreInfo(true)}}>
                                <img src={require("../assets/img/nav.png")} alt=""/>
                            </a>
                            <div className="media_header_info" id="wrapper">
                                <ul id="scroller">
                                    {this.renderFirstNav()}
                                </ul>
                            </div>
                        </header>
                    </div>
                    {/*给子路由传参*/}
                    {this.props.children && React.cloneElement(this.props.children, {
                        parentTarget:this
                    })}

                    <section className="media_info">
                        {this.renderMain()}
                    </section>
                </div>
            </div>
        );
    }

}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
}

export default App;
