import React from 'react'
import Comment from './Comment'
import '../assets/css/style_edit.css'
import $ from 'jquery'

export default React.createClass({
    getInitialState(){
        return{
            isactive:false,
            dom:{}
        }
    },
    myDelete(event){
        this.props.shadowState();
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
                                <div className={self.state.isactive ? "comment_left" : "comment_left hide"} onClick={self.myDelete}>
                                    <div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="comment_right">
                                    <Comment data={msg} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})