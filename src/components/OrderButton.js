import React from 'react';

export default React.createClass({
    getInitialState(){
        return{
            isAdd:false,
            msg:"订阅",
            isOrder:false
        }
    },

    handleClick(){
        if(this.state.isOrder) return;
        this.setState({isOrder:true})
        this.setState({isAdd:!this.state.isAdd})
        this.props.changeModalStyle({zIndex:10000})
        // console.log(this.state.isAdd)
        //react的神逻辑
        if(!this.state.isAdd){
            this.setState({msg:"已订阅"})
            this.props.modalShow('已添加订阅');
        }else{
            this.setState({msg:"订阅"})
            this.props.modalShow('已取消订阅');
        }
        let self = this;
        setTimeout(function(){
            self.props.modalShow();
            setTimeout(function(){
                self.setState({isOrder:false})
                self.props.changeModalStyle({})
            },600)
        },1000)
    },
    render(){
        return (
            <a href="javascript:;" onClick={this.handleClick}>
                <div className={this.state.isAdd ?  "main_order_select addhover" : "main_order_select"}>
                    <div className={this.state.isAdd ?  "icon_add hide" : "icon_add"} >
                        <span></span>
                        <span></span>
                    </div>
                    <span className={this.state.isAdd ?  "has_order" : ""}>{this.state.msg}</span>
                </div>
            </a>
        )
    }
})