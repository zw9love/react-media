import React from 'react'
import '../assets/css/style_orderSearch.css'
import '../assets/css/style_order.css'
import OrderCell from '../components/OrderCell'
import TitleSearch from '../components/TitleSearch'
import Mask from '../components/Mask'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'


export default React.createClass({
    getInitialState(){
        return {
            msg: '',
            orderData: [],
            isModal: false
        }
    },
    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    },
    componentDidMount(){
        this.renderOrderData()
        myScroll(this, {'data_name': 'orderData', 'fn_name': 'renderOrderData', 'num': 100})
        /*
         fetch(‘URL’,
         {
         method:'POST',
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
         },
         body:JSON.stringify(
         {'data':json}
         )
         }
         )
         .then(res => res.json())
         .then(json =>dispatch(receivePosts(json)))
         .catch(error=>dispatch(requestExceptions(error)));
         */
        // fetch('http://192.168.0.102/php/demo.php')
        //     .then(function(response) {
        //         if (response.status >= 400) {
        //             throw new Error("Bad response from server");
        //         }
        //         return response.json();
        //     })
        //     .then(function(stories) {
        //         console.log(stories);
        //     });
    },
    modalShow(msg){
        this.setState({ismodal: !this.state.ismodal});
        if (msg) {
            this.setState({modalMsg: msg});
        }
    },
    changeModalStyle(val){
        this.setState({modalStyle: val});
    },
    goOrderShow(){

    },
    renderOrderData(){
        let data = Mock.mock({
            'list|10': [{
                'id': '@id',
                'title': '@ctitle(6,150)',
                'author': '@cword(2,8)',
                'isOrder': '@boolean',
                'src': require('../assets/img/order.png'),
                'time': '@time("HH:mm")',
                'num|0-99': 0,
            }],
        }).list

        this.setState({orderData: this.state.orderData.concat(data)})
    },
    renderOrderCell(){
        let arr = []
        let data = this.state.orderData
        data.map((x,i)=>{
            arr.push(
                <div key={i}>
                    <div className="main_order" style={ i == 0 ? {margin:0} : {}}>
                        <a href="javascript:;" onClick={()=>{this.goOrderShow(x)}}>
                            <img src={x.src} alt="" />
                        </a>
                        <div className="main_order_info" style={{width:'61.38%'}}>
                            <p onClick={()=>{this.goOrderShow(x)}}><a href="javascript:;">{x.author}</a></p>
                            <p onClick={()=>{this.goOrderShow(x)}}>简介：{x.title}</p>
                        </div>
                        <OrderCell orderActive={x.isOrder}/>
                    </div>
                    <div className="line"></div>
                </div>
            )
        })

        return arr
    },
    render(){
        return (
            <div>
                <TitleSearch title="搜索尚阅号"/>
                <Mask msg={this.state.msg}/>

                <div className="container">
                    <div className="order_container" style={{margin:0}}>
                        {this.renderOrderCell()}
                    </div>
                </div>
            </div>
        )
    }
})