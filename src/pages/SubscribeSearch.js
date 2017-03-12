import React from 'react'
import '../assets/css/style_common.css'
import '../assets/css/style_search.css'
import '../assets/css/style_modal.css'
import Order from '../components/Order'
import SearchTitle from '../components/SearchTitle'


export default React.createClass({
    getInitialState(){
        return{
            modalMsg:'',
            list:[
                {name:'虎扑网1', info:'简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？简介:天天都轮雷霆管理层1？？？',lineShow:true,src:require('../assets/img/order.png')},
                {name:'虎扑网2', info:'简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？简介:天天都轮雷霆管理层2？？？',lineShow:true,src:require('../assets/img/order.png')},
                {name:'虎扑网3', info:'简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？简介:天天都轮雷霆管理层3？？？',lineShow:true,src:require('../assets/img/order.png')},
                {name:'虎扑网4', info:'简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？简介:天天都轮雷霆管理层4？？？',lineShow:true,src:require('../assets/img/order.png')},
                {name:'虎扑网5', info:'简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？简介:天天都轮雷霆管理层5？？？',lineShow:true,src:require('../assets/img/order.png')},
            ],
            ismodal:false
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
    render(){
        var self=this;
        return(
            <div className="container">
                <SearchTitle title="搜索尚阅号" />
                <div className={this.state.ismodal ? "modal active" : "modal"} style={this.state.modalStyle} ><div>{this.state.modalMsg}</div></div>
                {
                    this.state.list.map(function(msg,i){
                        return (
                                <Order key={i} data={msg} modalShow={self.modalShow} changeModalStyle={self.changeModalStyle}/>
                            )
                    })
                }
            </div>
        )
    }
})