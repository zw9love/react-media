import React from 'react';
import MyNav from './MyNav';
import '../assets/css/style_menu.css'

export default React.createClass({
    render(){
        return (
            <div className="menu">
                <MyNav idName="wrapper2" flag="second" list={this.state.SecondNavList} ref="mynav"/>
            </div>
        )
    },
    getInitialState(){
        return{
            SecondNavList: [
                {name:'咨询',isactive:true,href:"#/industry/1"},
                {name:'人物666',isactive:false,href:"#/industry/1"},
                {name:'买手',isactive:false,href:"#/industry/1"},
                {name:'设计师',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚111',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚222',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚333',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚444',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚555',isactive:false,href:"#/industry/1"},
                {name:'贺喜时尚666',isactive:false,href:"#/industry/1"},
            ]
        }
    },
    componentDidMount(){
        var index=this.props.index;
        this.refs.mynav.myclick(index);
        // console.log(this.props.changeIndex);
    }
})