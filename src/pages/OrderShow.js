import React from 'react'
import '../assets/css/style_common.css'
import '../assets/css/style_ordershow.css'
import '../assets/css/style_modal.css'
import OrderButton from '../components/OrderCell'
import MyLine from '../components/MyLine'
import Recommend from '../components/Recommend'
import { hashHistory } from 'react-router'

export  default  React.createClass({
    back(){
        hashHistory.go(-1)
    },
    render(){
        return(
            <div>
                <div className="page_header" id="ordershow">
                    <div className="back" onClick={this.back}>
                        <img src={require("../assets/img/back.png")} alt="" />
                    </div>
                    <img src={this.state.data.src} alt="" />
                    <OrderButton modalShow={this.modalShow} changeModalStyle={this.changeModalStyle}/>
                </div>
                <div className="container">
                    <div className="page_explain">
                        <p className="page_title">{this.state.data.name}</p>
                        <p className="page_info">{this.state.data.info}</p>
                    </div>
                    <MyLine />
                    {
                        this.state.list.map(function(msg,i){
                            return (
                                <Recommend key={i} data={msg}/>
                            )
                        })
                    }
                </div>
                 <div className={this.state.ismodal ? "modal active" : "modal"} style={this.state.modalStyle} ><div>{this.state.modalMsg}</div></div>
            </div>
        )
    },
    getInitialState(){
        return{
            list:[
                {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
            ],
            data:this.props.location.state,
            modalMsg:'',
        }
    },
    modalShow(msg){
        this.setState({ismodal:!this.state.ismodal});
        if(msg){
            this.setState({modalMsg:msg});
        }
    },
    changeModalStyle(val){
        this.setState({modalStyle:val});
    },
})