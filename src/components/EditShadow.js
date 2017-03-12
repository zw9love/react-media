import React from 'react'
import '../assets/css/style_editShadow.css'

export default React.createClass({
    cancel(){
        this.setState({isactive:!this.state.isactive})
    },

    sure(){
        this.setState({isactive:!this.state.isactive});
        this.props.getDom();
        this.setState({num:this.state.num + 1});
        if(this.state.num === this.state.length){
            this.props.noCommentState();
        }
    },

    render(){
        return(
            <div className={this.state.isactive ? "shadow" : "shadow hide"} >
                <div className="model">
                    <p>是否删除这条收藏？</p>
                    <div>
                        <button className="cancel" onClick={this.cancel}>取消</button>
                        <button className="sure" onClick={this.sure}>确定</button>
                    </div>
                </div>
            </div>
        )
    },
    getInitialState(){
        return{
            isactive:false,
            length:this.props.length,
            //因为react的渲染问题，初始化的num值一定要为1
            num:1
        }
    }
})