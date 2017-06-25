import React from 'react'
import MyTitle from '../components/MyTitle'
import '../assets/css/style_sugguestion.css'
export default React.createClass({
    getInitialState(){
        return{
            sugguestMsg:'',
            concatMsg:'',
            isActive:false
        }
    },
    setSugguestMsg(event){
        let check1 = /^1[34578]\d{9}$/.test(this.state.concatMsg)
        let check2 = /^[1-9][0-9]{4,9}$/.test(this.state.concatMsg)
        let check3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.concatMsg)
        let check = check1 || check2 || check3
        if (event.target.value.trim() && check) {
            this.setState({isActive:true,sugguestMsg:event.target.value})
        } else {
            this.setState({isActive:false,sugguestMsg:event.target.value})
        }
    },
    setConcatMsg(event){
        let check1 = /^1[34578]\d{9}$/.test(event.target.value)
        let check2 = /^[1-9][0-9]{4,9}$/.test(event.target.value)
        let check3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(event.target.value)
        let check = check1 || check2 || check3
        if (this.state.sugguestMsg.trim() && check) {
            this.setState({isActive:true,concatMsg:event.target.value})
        } else {
            this.setState({isActive:false,concatMsg:event.target.value})
        }
    },
    render(){
        return(
            <div className="container">
                <MyTitle title="我的意见" name="" />

                <div className="sugguest_info">
                    <textarea name="" id="" placeholder="请留下您的宝贵意见..."  value={this.state.sugguestMsg} onInput={this.setSugguestMsg} />
                </div>
                <div className="sugguest_phone">
                    {/* maxLength="11" */}
                    <input type="text" placeholder="联系方式：QQ、邮箱或手机"  value={this.state.concatMsg} onInput={this.setConcatMsg}/>
                </div>
                <p className="staff">您的联系方式有助于我们沟通和解决问题，仅工作人员可见</p>
                <button className={this.state.isActive ? "commit hover" : "commit"} >提交</button>
            </div>

        )
    }
})
