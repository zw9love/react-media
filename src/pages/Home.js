import React, {Component} from 'react';
import '../assets/css/style_home.css';
import FirstNav from '../components/FirstNav'
import RecommendEach from '../components/RecommendEach'
import HomeShadow from '../components/HomeShadow'
import MyAside from '../components/MyAside'
import $ from 'jquery'

class App extends Component {
    constructor(props){
        super(props);
        // this.forSecond = this.forSecond.bind(this);
        this.moreInfo = this.moreInfo.bind(this);
        this.quit = this.quit.bind(this);
        var self=this;
        this.changeIndex=function(val){
            self.state.index=val;
        }
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
        isactive:false
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

    render() {
        return (
            <div className="home">
                <MyAside ref="myaside" quit={this.quit}/>
                <HomeShadow ref="homeshadow" quit={this.quit}/>
                <div className={this.state.isactive ? "home_container go_contain" : "home_container"} onClick={this.moreInfo}>
                    <div className={this.state.isactive ? "contain_shadow go_shadow" : "contain_shadow"}></div>
                    <FirstNav ref="firstnav" moreInfo={this.moreInfo}/>
                    {/*给子路由传参*/}
                    {this.props.children && React.cloneElement(this.props.children, {
                        index: this.state.index,
                        changeIndex:this.changeIndex
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
        var id=this.props.params.id;
        if(!id) return;
        this.refs.firstnav.refs.mynav.refs['li'+id].handleClick();
    }

    componentWillMount(){
        $('html,body').css({
            'perspective':'600px',
            '-webkit-perspective':'600px'
        });
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
