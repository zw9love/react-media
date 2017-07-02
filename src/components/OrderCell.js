import React from 'react';
import '../assets/css/style_orderCell.css'

export default React.createClass({
    getInitialState(){
        return {
            msg: "订阅",
            orderActive: this.props.orderActive
        }
    },
    contextTypes: {
        store: React.PropTypes.object.isRequired
    },

    componentDidMount(){

    },
    handleClick(){
        let mask = this.context.store.getState().maskReducer
        let maskLock = this.context.store.getState().maskLockReducer
        if(maskLock) return
        this.context.store.dispatch({type:'setMaskLock',value:true})
        mask.msg = this.state.orderActive ? '已取消订阅' : '已添加订阅'
        mask.changeState()
        this.setState({orderActive: !this.state.orderActive})
    },
    render(){
        return (
            <div onClick={this.handleClick}
                 className={this.state.orderActive ? "main_order_select order" : "main_order_select"} style={{}}>
                <div className="icon_add">
                    <span></span>
                    <span></span>
                </div>
                <span>{this.state.orderActive ? '已订阅' : '订阅'}</span>
            </div>
        )
    }
})