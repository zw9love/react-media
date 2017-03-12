import React from 'react';
import '../assets/css/style_showText.css'

export default React.createClass({
    getInitialState(){
      return {
          isactive:this.props.isactive
      }
    },
    render(){
        return (
            <div className={this.state.isactive ? "main_info" : "main_info hide"}>
                <p>我勒个去啊我勒个去啊我勒个去啊我勒个去啊</p>
                {
                    this.props.data.map(function(msg,i){
                        return (
                            <div key={i}>
                                <div className="main_info_img">
                                    <img src={msg.src} alt="" />
                                </div>
                                <p>{msg.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})