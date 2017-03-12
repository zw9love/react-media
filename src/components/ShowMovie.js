import React from "react"
import '../assets/css/style_movie.css'

export default React.createClass({
    getInitialState(){
        return {
            isactive:this.props.isactive
        }
    },
    render(){
        return(
            <div className={this.state.isactive ? "movie" : "movie hide"}>
                <video src="http://localhost:8080/src/assets/video/go.mp4"  id="video" ></video>
                <img src={require("../assets/img/movie.jpg")} alt="" />
                    <a href="javascript:;">
                        <div className="media_info_movie">
                            <span></span>
                        </div>
                    </a>
            </div>
        )
    }
})