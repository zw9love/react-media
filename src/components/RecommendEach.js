import React from 'react';
import Recommend from './Recommend'
import BigRecommend from  './BigRecommend'

var RecommendEach = React.createClass({
    render:function () {
        return (
            <div>
                {
                    this.state.arr.map(function(msg,i){
                        return <Recommend key={i} data={msg}/>
                    })
                }
                <BigRecommend data={this.state.bigarr}/>
             </div>
        )
    },
    getInitialState(){
        return{
            bigarr:[],
            arr:[]
        }
    },
    //在渲染前调用,在客户端也在服务端。
    componentWillMount(){
        // var arr=[];
        // arr.push(this.props.data.pop());
        this.setState({bigarr:this.props.data.pop()});
        this.setState({arr:this.props.data});
        //我靠  获取不到
        // console.log(this.state.arr);
    }
})

export default RecommendEach