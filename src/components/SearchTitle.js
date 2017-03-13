import React from 'react'
import '../assets/css/style_search.css'
import { hashHistory } from 'react-router';

export default React.createClass({
    getInitialState(){
        return{
            isactive:false,
            value:''
        }
    },
    render(){
        return(
            <div className="page_hide">
                <div className="back" onClick={this.back}>
                    <img src={require("../assets/img/back.png")} alt="" />
                </div>
                <form id="form" >
                    <div className="media_search_hide">
                        <input type="text" onFocus={this.myfocus} onChange={this.mychange} onBlur={this.myblur}/>
                        <div>
                            <img src={ require("../assets/img/search.png") } alt="" className={this.state.isactive ? "hide" : ""}/>
                            <span className={this.state.isactive ? "hide" : ""}>&nbsp;{this.props.title}</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    back(){
        hashHistory.go(-1)
    },
    myfocus(){
        this.setState({isactive: true})
    },
    myblur(event){
        event.target.value.trim() ? this.setState({isactive: true}) : this.setState({isactive: false})
    },
    mychange(event){
        // this.setState({value:event.target.value})
        event.target.value.trim() ? this.setState({isactive: true}) : this.setState({isactive: false})
    }
})