import React from 'react';
import MySearch from './MySearch'

export default React.createClass({
    getInitialState(){
        return{
            data:{
                name:'搜索订阅号',
                url:'/orderlist'
            }
        }
    },
    render(){
        return (
            <MySearch data={this.state.data}/>
        )
    }
})