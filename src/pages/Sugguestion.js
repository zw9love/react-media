import React from 'react'
import MyTitle from '../components/MyTitle'
import '../assets/css/style_common.css'
import '../assets/css/style_sugguestion.css'
// import reactMixin from 'react-mixin';


export default React.createClass({
    getInitialState(){
        return{
            val1:'',
            val2:'',
            isactive:false
        }
    },
    valChange1(event){
        this.setState({val1:event.target.value})
        this.test(this.state.val2,event.target.value);
    },
    valChange2(event){
        this.setState({val2:event.target.value})
        this.test(event.target.value,this.state.val1);
    },
    test(n1,n2){
        if((/^1[34578]\d{9}$/.test(n1)) && n2.trim()){
            this.setState({isactive:true})
        }else{
            this.setState({isactive:false})
        }
    },
    render(){
        return(
            <div id="sugguestion">
                <MyTitle title="我的意见" name="" />
                <div className="container">
                    <div className="sugguest_info">
                        <textarea name="" id="" placeholder="请留下您的宝贵意见..."  value={this.state.val1} onChange={this.valChange1}></textarea>
                    </div>
                    <div className="sugguest_phone">
                        <input type="text" placeholder="联系方式：QQ、邮箱或手机" maxLength="11" value={this.state.val2} onChange={this.valChange2}/>
                    </div>
                    <p>您的联系方式有助于我们沟通和解决问题，仅工作人员可见</p>
                    <button className={this.state.isactive ? "commit hover" : "commit"} >提交</button>
                </div>
            </div>
        )
    }
})
