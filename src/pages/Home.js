import React, {Component} from 'react';
import '../assets/css/style_home.css';
import FirstNav from '../components/FirstNav'
import RecommendEach from '../components/RecommendEach'
import HomeShadow from '../components/HomeShadow'
import MyAside from '../components/MyAside'
import $ from 'jquery'
import Cookie from '../assets/js/Cookie'

class App extends Component {
    constructor(props){
        super(props);
        this.moreInfo = this.moreInfo.bind(this);
        this.quit = this.quit.bind(this);
    }

    state = {
        recommendList:[
            //推荐块4个一组  3大1小
            [
                {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}},
                {eyes:999, msg:333, ismovie:false,infoObj:{ismovie:false}}
            ]
        ],
        index:0,
        isactive:false,
        backHome:null
    }

    moreInfo(val){
        // console.log(val)
        if(val === true){
            this.setState({isactive: val});
            this.refs.myaside.setState({isactive: val});
        }else{
            this.setState({isactive: false});
            this.refs.myaside.setState({isactive: false})
        }
    }

    quit(){
        this.refs.homeshadow.setState({isactive: ! this.refs.homeshadow.state.isactive})
        $('html,body').toggleClass('noscroll')
    }

    test(val,e){
        console.log(val)
        console.log(e.target)
    }

    render() {
        return (
            <div className="home">
                <MyAside ref="myaside" quit={this.quit} myself={this}/>
                <HomeShadow ref="homeshadow" quit={this.quit}/>
                {/*<h1 onClick={this.test.bind(this,20)}>测试一下</h1>*/}
                <div className={this.state.isactive ? "home_container go_contain" : "home_container"} onClick={this.moreInfo}>
                    <div className={this.state.isactive ? "contain_shadow go_shadow" : "contain_shadow"}></div>
                    <FirstNav ref="firstnav" moreInfo={this.moreInfo} backHome={this.state.backHome} />
                    {/*给子路由传参*/}
                    {this.props.children && React.cloneElement(this.props.children, {
                        index: this.state.index
                    })}

                    <section className="media_info">
                    {
                        this.state.recommendList.map(function(msg,i){
                            return <RecommendEach key={i} data={msg} />
                        })
                    }
                    </section>
                </div>
            </div>
        );
    }

    componentDidMount(){
        // console.log(1)
        if(Cookie.myCookie.getCookie('backHome')) this.moreInfo(true) ;
        Cookie.myCookie.deleteCookie('backHome');
        var id=this.props.params.id;
        if(!id) return;
        this.refs.firstnav.refs.mynav.refs['li'+id].handleClick();
    }

    componentWillMount(){
        $('html,body').css({
            'perspective':'600px',
            '-webkit-perspective':'600px'
        });

        this.setState({backHome:this.props.location.state})
    }

    componentWillUnmount(){
        $('html,body').css({
            'perspective':'none',
            '-webkit-perspective':'none'
        });
    }

    // componentWillUpdate(nextProps,nextState){
    //     // console.log(nextState.index);
    //     console.log('home的值被修改')
    // }

}

export default App;
