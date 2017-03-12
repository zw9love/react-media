import React from 'react';
import MyNav from './MyNav';
import '../assets/css/style_firstnav.css';

export default React.createClass({
    myInfo(event){
        event.stopPropagation();
        this.props.moreInfo(true);
    },
    render:function(){
        return (
            <div className="header_contain">
                <header className="media_header">
                    <a href="javascript:;" onClick={this.myInfo}>
                        <img src={require("../assets/img/nav.png")} alt="" />
                    </a>
                    <MyNav idName="wrapper" flag="first" list={this.state.firstNavList} ref="mynav"/>
                </header>
            </div>
        )
    },
    getInitialState(){
        return{
            firstNavList: [
                {name: '推荐', isactive:true, href: "#/"},
                {name: '行业', isactive:false, href: "#/industry/1"},
                {name: '订阅', isactive:false, href: "#/order/2"},
                {name: '时尚', isactive:false, href: "#/"},
                {name: '美妆', isactive:false, href: "#/"},
                {name: '推荐2', isactive:false, href: "#/"},
                {name: '行业2', isactive:false, href: "#/"},
                {name: '订阅2', isactive:false, href: "#/"},
                {name: '时尚2', isactive:false, href: "#/"},
                {name: '美妆3', isactive:false, href: "#/"},
                {name: '美妆4', isactive:false, href: "#/"},
                {name: '美妆5', isactive:false, href: "#/"},
                {name: '美妆6', isactive:false, href: "#/"}
            ]
        }
    }
});
