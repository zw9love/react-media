import React from 'react';
import '../assets/css/style_mynav.css';
import NavLi from './NavLi';
import $ from 'jquery'

//这里相当于用script标签引入了js
import Slidemove from '../assets/js/Slidemove.js'

export default React.createClass({
    getInitialState(){
        return{
            index:''
        }
    },
    //包含块的初始化工作
    containerInit(){
        // console.log(this.refs.self);
        let sum = 0, max;
        let obj = $(this.refs.self);

        obj.find('li').each(function () {
            sum += $(this).outerWidth() + parseInt($(this).css('margin-right'));
        });
        max = sum - obj.width();
        obj.children('ul').attr({
            'mymax': max
        });

    },
    navClickInit(idName, classname){
        let center = $(idName + ' ul').position().left + $(idName).width() / 2;
        let mymax = Number($(idName + ' ul').attr('mymax'));
        let index = $(classname).index();

        $(idName + '>ul>li').each(function (i) {
            let dis = center - parseInt($(this).position().left) - $(this).width() / 2 - 15;
            if (dis > 0) {
                dis = 0;
            }
            else if (dis < (-mymax)) {
                dis = -mymax;
            }
            $(this).attr('myleft', dis);

            if (i === index) {
                $(this).parent().css({
                    'transform': 'translateX(' + dis + 'px)',
                    '-webkit-transform': 'translateX(' + dis + 'px)'
                });
            }
        });
    },
    //一级导航栏点击事件初始化工作
    firstInit(){
        this.navClickInit('#wrapper', '.current')
    },
    //二级导航栏点击事件初始化工作
    secondInit(){
        this.navClickInit('#wrapper2', '.menucurrent')
    },
    //当页面的dom渲染完毕的时候
    componentDidMount: function () {
        this.containerInit();
        if (this.props.idName === 'wrapper') {
            this.firstInit();
        } else {
            this.secondInit();
        }

        Slidemove.go('mouse');
        Slidemove.go('touch');
    },
    myclick(){
        for (var i = 0; i < this.props.list.length; i++) {
            //只有用setState()才会重新渲染dom
            this.refs["li" + i].setState({isactive: false})
        }
    },
    setIndex(val){
        this.setState({index:val})
    },
    // componentWillUpdate(nextProps,nextState){
    //     alert(666);
    //     console.log(this.state.index);
    // },
    //shouldComponentUpdate 的返回值的布尔值真假 直接决定componentWillUpdate componentDidUpdate会不会执行
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps);
    //     console.log(nextState);
    //     return true;
    // },
    // componentDidUpdate(){
    //     console.log('值被更新再渲染')
    // },
    render: function () {
        var self = this;
        return (
            <div className="media_header_info" ref="self" id={this.props.idName}>
                <ul id="scroller">
                    {
                        this.props.list.map(function (msg, i) {
                            return <NavLi setIndex={self.setIndex} key={i} data={msg} navClick={self.myclick} flag={self.props.flag}
                                          ref={"li" + i}  index={i}/>
                        })
                    }
                </ul>
            </div>
        )
    }
});
