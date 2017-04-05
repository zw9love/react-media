import React ,{Component} from 'react'
import '../assets/css/style_editShadow.css'
import { connect } from 'react-redux'

function editShadowReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'EditShadow':return value; break;
        case 'getEditShadow':return state; break;
        default:return state;
    }
    // return state
}

module.exports.editShadowReducer=editShadowReducer;

const EditShadow = React.createClass({
    cancel(){
        this.setState({isactive:!this.state.isactive})
    },
    sure(){
        this.setState({isactive:!this.state.isactive});
        this.props.getDom();
        this.setState({num:this.state.num + 1});
        if(this.state.num === this.state.length){
            this.props.noCommentState();
        }
    },
    render(){
        return(
            <div className={this.state.isactive ? "shadow" : "shadow hide"} >
                <div className="model">
                    <p>是否删除这条收藏？</p>
                    <div>
                        <button className="cancel" onClick={this.cancel}>取消</button>
                        <button className="sure" onClick={this.sure}>确定</button>
                    </div>
                </div>
            </div>
        )
    },
    getInitialState(){
        return{
            isactive:false,
            length:this.props.length,
            //因为react的渲染问题，初始化的num值一定要为1
            num:1
        }
    },
    componentDidMount(){
        const { setMyState,shadowState} = this.props;
        setMyState(this);
        //console.log(shadowState)
        //console.log(this.context.store);
        //console.log(this.context.store.getState().editShadowReducer)
    },
    contextTypes:{
        store: React.PropTypes.object.isRequired
    }
})

// Action
//const setStateAction = { type: 'EditShadow' ,value};

//这个还必须呀 我去
function mapStateToProps(state) {
    //console.log(state);
    return {
        shadowState:state.editShadowReducer
    }
}

// Map Redux actions to component props  负责输出逻辑
/*
    mapDispatchToProps的里面方法的调用会再次触发mapStateToProps
*/
function mapDispatchToProps(dispatch) {
    // console.log(ownProps)
    return {
        setMyState: (obj) => dispatch({ type: 'EditShadow' ,value:obj}),
        //getMyState: () => dispatch({type: 'getEditShadow'})
    }
}

module.exports.EditShadow = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditShadow);