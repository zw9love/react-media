import React from 'react';
import '../assets/css/style_indexSearch.css'
import { hashHistory } from 'react-router';

export default React.createClass({
    render(){
        return(
            <div className="search_contain"  onClick={this.jump}>
                <div className="media_search">
                    <div></div>
                    <img src={require("../assets/img/search.png")} alt="" />
                        <span>&nbsp;搜索</span>
                </div>
            </div>
        )
    },
    jump(){
        hashHistory.push({
            pathname: '/search'
        })
    }
});