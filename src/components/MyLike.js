import React from 'react'
import Recommend from './Recommend'
import '../assets/css/style_edit.css'
import $ from 'jquery'
import { connect } from 'react-redux'

const Mylike = React.createClass({
    // componentDidMount(){
    //     console.log(this.props.location)
    // },
    getInitialState(){
        return{
            isactive:false,
            dom:{}
        }
    },
    myDelete(event){
        // let {message} = this.props;
        //alert(1)
        let shadowObj=this.context.store.getState().editShadowReducer;
        shadowObj.setState({isactive:!shadowObj.state.isactive});
        var obj=event.target;
        this.setState({dom:$(obj).parents('.comment')});
    },
    render(){
        var self=this;
        return(
            <div>
            {
                this.props.data.map(function(msg,i){
                    return (
                        <div className="comment" key={i}>
                            <div className={self.state.isactive ? "comment_left" : "comment_left hide"} onClick={self.myDelete} >
                                <div>
                                    <span></span>
                                </div>
                            </div>
                            <div className="comment_right">
                                <Recommend data={msg} />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    },
    contextTypes:{
        store: React.PropTypes.object.isRequired
    }
});

//这个还必须呀 我去
// function mapStateToProps(state) {
//     // console.log(ownProps)
//     return {
//         // value: state.count,
//          message:'嘿嘿我来了'
//     }
// }
//
// // Map Redux actions to component props  负责输出逻辑
// function mapDispatchToProps(dispatch) {
//     // console.log(ownProps)
//     return {
//         //onChangeClick: () => dispatch(changeAction)
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Mylike)

module.exports = Mylike