/**
 * Created by Administrator on 2017/7/1.
 */
import React from 'react'
import '../assets/css/style_mask.css'

export default class Mask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:this.props.msg,
            active:false
        }
    }

    componentDidMount(){
        this.context.store.dispatch({type:'setMask',value:this})
    }

    changeState(){
        this.setState({msg:this.msg,active:true})
        clearInterval(this.timer)
        this.timer = setTimeout(()=>{
            this.setState({active:false})
            this.context.store.dispatch({type:'setMaskLock',value:false})
        },1000)
    }

    render(){
        return (
            this.state.active ? (
                <div className="mask">
                    <div className="mask-text">{this.state.msg}</div>
                </div>
            ) : null
        )
    }
}

Mask.contextTypes = {
    store: React.PropTypes.object.isRequired
}

