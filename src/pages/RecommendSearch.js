import React from 'react'
import SearchTitle from '../components/SearchTitle'
import Recommend from '../components/Recommend'
import '../assets/css/style_common.css'
import '../assets/css/style_search.css'

export default React.createClass({
    render(){
        return(
            <div className="container">
                <SearchTitle title="搜索推荐文章" />
                {
                    this.state.list.map(function(msg,i){
                        return (
                            <Recommend  key={i}  data={msg} />
                        )
                    })
                }

        </div>
        )
    },
    getInitialState(){
        return{
            list:[
                {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}},
                {eyes:999, msg:333, ismovie:false,infoObj:{ismovie:false}}
            ]
        }
    }
})