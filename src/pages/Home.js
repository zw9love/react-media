import React, {Component} from 'react';
import '../assets/css/style_home.css';
import FirstNav from '../components/FirstNav'
import Recommend from '../components/Recommend'
import BigRecommend from '../components/BigRecommend'
import HomeShadow from '../components/HomeShadow'
import MyAside from '../components/MyAside'
import $ from 'jquery'
import Cookie from '../assets/js/Cookie'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'

class App extends Component {
    constructor(props) {
        super(props);
        this.moreInfo = this.moreInfo.bind(this);
        this.quit = this.quit.bind(this);
        this.renderRecommendData = this.renderRecommendData.bind(this);
        this.renderMain = this.renderMain.bind(this);
        this.renderSecondMain = this.renderSecondMain.bind(this);
        this.renderFirstNavData = this.renderFirstNavData.bind(this);
        this.renderFirstNav = this.renderFirstNav.bind(this);
    }

    state = {
        recommendData: [],
        firstNavData: [],
        index: 0,
        activeIndex: 0,
        isactive: false,
        backHome: null,
        lock: false
    }

    componentWillMount() {
        // $('html,body').css({
        //     'perspective': '600px',
        //     '-webkit-perspective': '600px'
        // });

        this.setState({backHome: this.props.location.state})
    }

    componentWillUnmount() {
        // $('html,body').css({
        //     'perspective': 'none',
        //     '-webkit-perspective': 'none'
        // });
    }

    // componentWillUpdate(nextProps,nextState){
    //     // console.log(nextState.index);
    //     console.log('home的值被修改')
    // }

    // 点击更多信息图标
    moreInfo(val) {
        // console.log(val)
        if (val === true) {
            this.setState({isactive: val});
            this.refs.myaside.setState({isactive: val});
        } else {
            this.setState({isactive: false});
            this.refs.myaside.setState({isactive: false})
        }
    }

    quit() {
        // this.refs.homeshadow.setState({isactive: !this.refs.homeshadow.state.isactive})
        // $('html,body').toggleClass('noscroll')
    }

    test(val, e) {
        console.log(val)
        console.log(e.target)
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

        this.setState({recommendData:this.state.recommendData.concat(data)})

       // console.log(JSON.stringify(this.state.recommendData, null, 4))
    }

    //渲染一级导航数据
    renderFirstNavData(){
        let data = Mock.mock({
            'list|30': [{
                'name': '@cword(2, 5)',
            }],
        }).list

        this.setState({firstNavData:data})
    }

    // 渲染一级导航
    renderFirstNav(){
        // :class="{'current': activeIndex == index}"
        let data = this.state.firstNavData
        let arr = []
        data.forEach((msg,i)=>{
            arr.push(
                <li key={i}>
                    <a href="javascript:;" className={this.state.activeIndex == i ? 'current' : ''}>{msg.name}</a>
                </li>
            )
        })

        return arr
    }


    // 第二层循环
    renderSecondMain(data){
        let arr = []
        data.forEach((msg,index)=>{
            // console.log(msg)
            if(index < 3){
                arr.push(<Recommend data={msg} key={index} />)
            }else {
                arr.push(<BigRecommend data={msg} key={index}/>)
            }
        })

        return arr
    }

    // 第一层循环
    renderMain(){
        let arr = []
        let data = this.state.recommendData
        data.forEach((msg,i)=>{
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
                <MyAside ref="myaside" quit={this.quit} myself={this}/>
                <HomeShadow ref="homeshadow" quit={this.quit}/>
                {/*<h1 onClick={this.test.bind(this,20)}>测试一下</h1>*/}
                <div className={this.state.isactive ? "container go_contain" : "container"}
                     onClick={this.moreInfo}>
                    <div className={this.state.isactive ? "contain_shadow go_shadow" : "contain_shadow"}></div>
                    {/*一级导航*/}
                    <div className="header_contain">
                        <header className="media_header">
                            <a href="javascript:;" ><img src={require("../assets/img/nav.png")} alt="" /></a>
                            <div className="media_header_info" id="wrapper">
                                <ul id="scroller">
                                    {this.renderFirstNav()}
                                </ul>
                            </div>
                        </header>
                    </div>
                    {/*<FirstNav ref="firstnav" moreInfo={this.moreInfo} backHome={this.state.backHome}/>*/}
                    {/*给子路由传参*/}
                    {this.props.children && React.cloneElement(this.props.children, {
                        index: this.state.index
                    })}

                    <section className="media_info">
                        {this.renderMain()}
                    </section>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.renderFirstNavData()
        this.renderRecommendData()
        myScroll(this,{'data_name':'recommendData','fn_name':'renderRecommendData','num':100})
        // console.log(1)
        // if(Cookie.myCookie.getCookie('backHome')) this.moreInfo(true) ;
        // Cookie.myCookie.deleteCookie('backHome');
        var id = this.props.params.id;
        if (!id) return;
        this.refs.firstnav.refs.mynav.refs['li' + id].handleClick();
    }

}

export default App;
