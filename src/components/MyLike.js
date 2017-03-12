import React from 'react'
import Recommend from './Recommend'
import '../assets/css/style_edit.css'
import $ from 'jquery'

export default React.createClass({
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
    }
})