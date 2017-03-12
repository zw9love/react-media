import React from 'react'

var MyTemp = React.createClass({
    getInitialState(){
        return{
            isactive:this.props.isactive
        }
    },
    render(){
        return (
            <span className={this.state.isactive ? 'main_comment_name' : 'main_comment_name hide'}> 回复 <a href="#/">{this.props.name}</a></span>
        )
    }
})

export default React.createClass({
    render(){
        return(
            <p>
                <span className="main_comment_name"><a href="#/">{this.props.data.name1}</a><MyTemp name={this.props.data.name2} isactive={this.props.data.isactive} /> : </span>
                {this.props.data.info}
            </p>
        )
    }
})