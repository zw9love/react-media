/**
 * Created by Administrator on 2017/6/25.
 */
import React, {Component} from 'react'
import $ from 'jquery'

export default class MyShadow extends Component {

    constructor(props) {
        super(props)

        this.renderView = this.renderView.bind(this)

        this.state = {
            shadowActive: false,
            shadowStyle: {width:'600px',height:$(window).height() + 'px'}
        }
    }

    // static contextTypes:{
    //     store: React.PropTypes.object.isRequired
    // }

    // 组件dom结构加载完成
    componentDidMount(){
        this.context.store.dispatch({ type: 'setMyShadow' ,value:this})
    }

    cancel(){
        this.setState({shadowActive:false})
    }

    sure(){
        this.cancel()
    }

    renderView() {
        if (this.state.shadowActive) {
            return (
                <div className="shadow" style={this.state.shadowStyle}>
                    <div className="model">
                        <p>{this.props.title}</p>
                        <div>
                            <button className="cancel" onClick={this.cancel.bind(this)}>取消</button>
                            <button className="sure" onClick={this.sure.bind(this)}>确定</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return this.renderView()
    }
}

MyShadow.contextTypes = {
    store: React.PropTypes.object.isRequired
}