import React from 'react'
import '../assets/css/style_showTextArea.css'

export default React.createClass({
    getInitialState(){
        return{
            isactive:false
        }
    },
    cancel(){
        this.setState({isactive:!this.state.isactive});
        this.props.backShow();
    },
    sure(){
        this.setState({isactive:!this.state.isactive});
        this.props.backShow();
    },
    render(){
        return(
            <div className={this.state.isactive ? "text" : "text text_opacity"} >
                <div className="btn1">
                    <span><a href="javascript:;" onClick={this.cancel}>取消</a></span>
                </div>
                <div className="btn2">
                    <span><a href="javascript:;" onClick={this.sure}>发表</a></span>
                </div>
                <textarea id="txt" placeholder="我来说两句..." ref="text"></textarea>
            </div>
        )
    }
});