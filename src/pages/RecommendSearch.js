import React from 'react'
import TitleSearch from '../components/TitleSearch'
import Recommend from '../components/Recommend'
import {myScroll, unScroll} from '../tool/Scroll'
import Mock from 'mockjs'

export default React.createClass({
    getInitialState(){
        return{
            recommendData:[]
        }
    },
    componentDidMount() {
        this.renderRecommendData()
        myScroll(this, {'data_name': 'recommendData', 'fn_name': 'renderRecommendData', 'num': 100})
    },

    // 组件销毁的时候
    componentWillUnmount() {
        unScroll()
    },
    renderRecommendCell(){
        let arr = []
        let data = this.state.recommendData
        data.map((data,i)=>{
            arr.push(
                <Recommend data={data} key={i} />
            )
        })
        return arr
    },
    // 渲染推荐块数据
    renderRecommendData() {
        let data = Mock.mock({
            'list|10': [
                {
                    'id': '@id',
                    'title': '@ctitle(6,50)',
                    'author': '@cword(2,8)',
                    'msg_num|0-999': 0,
                    'eye_num|0-999': 0,
                    'isMovie': '@boolean',
                    'isOrder': '@boolean',
                    'time': '@datetime("yyyy-MM-dd")',
                    'src': '../assets/img/order.png',
                    'infoData|1-5': [{
                        'info': '@cparagraph()',
                        'src': require('../assets/img/show_1.jpg')
//                  'src': '../assets/img/show_' + '@integer(1, 3)' + '.jpg'
                    }]
                },
            ]
        }).list

        this.setState({recommendData: this.state.recommendData.concat(data)})

        // console.log(JSON.stringify(this.state.recommendData, null, 4))
    },
    render(){
        return(
            <div>
                <TitleSearch title="搜索尚阅号"/>
                <div className="container">
                    {this.renderRecommendCell()}
                </div>
            </div>
        )
    }
})