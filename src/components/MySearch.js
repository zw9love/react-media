/**
 * Created by zw9love on 2017/6/25.
 */

import React, {Component} from 'react'
import '../assets/css/style_search.css'
import { hashHistory } from 'react-router';

export default class MySearch extends Component{
    constructor(props){
        super(props)
        this.jump = this.jump.bind(this)
    }

    jump(){
        hashHistory.push({
            pathname: this.props.data.url
        })
    }

    render(){
        return(
            <div className="search_contain"  onClick={this.jump}>
                <div className="media_search">
                    <div></div>
                    <img src={require("../assets/img/search.png")} alt="" />
                    <span>&nbsp;{this.props.data.name}</span>
                </div>
            </div>
        )
    }
}
