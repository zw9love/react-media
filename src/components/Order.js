import React from 'react';
import MyLine from './MyLine'
import OrderButton from './OrderButton'
import '../assets/css/style_order.css'

export default React.createClass({
    render(){
        return(
            <div>
                <div className="main_order main_sp">
                    <a href="javascript:;" ><img src={this.props.data.src} alt="" /></a>
                <div className="main_order_info">
                    <p><a href="javascript:;" >{this.props.data.name}</a></p>
                <p>{this.props.data.time || this.props.data.info}</p>
                </div>
                <OrderButton modalShow={this.props.modalShow} changeModalStyle={this.props.changeModalStyle}/>
                </div>
                <MyLine />
            </div>
        )
    }
})