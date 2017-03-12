import React from 'react'
import MyLine from './MyLine'
export default React.createClass({
    quit(){
        if(this.props.index === 4){
            this.props.quit();
        }
    },
    render(){
        return(
            <div>
                <a href={this.props.data.href} onClick={this.quit}>
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

