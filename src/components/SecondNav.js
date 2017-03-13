import React from 'react';
import MyNav from './MyNav';
import '../assets/css/style_menu.css'

export default React.createClass({
    render(){
        return (
            <div className="menu">
                <MyNav idName="wrapper2" flag="second" list={this.state.SecondNavList} changeIndex={this.props.changeIndex} ref="mynav"/>
            </div>
        )
    },
    getInitialState(){
        return{
            SecondNavList: [
                {name:'咨询',isactive:true,href:"#/industry/1/0"},
                {name:'人物666',isactive:false,href:"#/industry/1/1"},
                {name:'买手',isactive:false,href:"#/industry/1/2"},
                {name:'设计师',isactive:false,href:"#/industry/1/3"},
                {name:'贺喜时尚111',isactive:false,href:"#/industry/1/4"},
                {name:'贺喜时尚222',isactive:false,href:"#/industry/1/5"},
                {name:'贺喜时尚333',isactive:false,href:"#/industry/1/6"},
                {name:'贺喜时尚444',isactive:false,href:"#/industry/1/7"},
                {name:'贺喜时尚555',isactive:false,href:"#/industry/1/8"},
                {name:'贺喜时尚666',isactive:false,href:"#/industry/1/9"},
            ]
        }
    },
    componentDidMount(){
        var index=this.props.params.index || this.props.index;
        this.refs.mynav.refs['li'+index].handleClick();
    }
})