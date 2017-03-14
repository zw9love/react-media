import React from 'react'
import MyLine from './MyLine'
import { hashHistory } from 'react-router'
export default React.createClass({
    jump(e){
        if(this.props.index === 4){
            this.props.quit();
        }
    },
    render(){
        return(
            <div>
                <a href={this.props.data.href} onClick={this.jump} >
                    <li>
                        <img src={this.props.data.src} alt="" />
                        <span>{this.props.data.info}</span>
                    </li>
                </a>
                 <MyLine />
            </div>
        )
    }
})

