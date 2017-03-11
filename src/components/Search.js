import React from 'react';
import '../assets/css/style_indexSearch.css'

export default React.createClass({
    render(){
        return(
            <div className="search_contain" >
                <div className="media_search">
                    <div></div>
                    <img src={require("../assets/img/search.png")} alt="" />
                        <span>&nbsp;搜索</span>
                </div>
            </div>
        )
    }
});