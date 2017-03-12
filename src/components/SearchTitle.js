import React from 'react'
import '../assets/css/style_search.css'
import { hashHistory } from 'react-router';

export default React.createClass({
    render(){
        return(
            <div className="page_hide">
                <div className="back" onClick={this.back}>
                    <img src={require("../assets/img/back.png")} alt="" />
                </div>
                <form id="form" >
                    <div className="media_search_hide">
                        <input type="text" />
                        <div>
                            <img src={ require("../assets/img/search.png") } alt="" />
                            <span>&nbsp;{this.props.title}</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    back(){
        hashHistory.go(-1)
    }
})