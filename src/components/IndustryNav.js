/**
 * Created by zw9love on 2017/7/3.
 */

import React from 'react'
import Mock from 'mockjs'

export default class IndustryNav extends React.Component {

    constructor(props) {
        super(props)

        this.renderNavData = this.renderNavData.bind(this)
        this.renderNav = this.renderNav.bind(this)

        this.state = {
            navData: [],
            activeIndex: 0,
            parentTarget:this.props.parentTarget
        }
    }

    componentDidMount() {
        this.renderNavData()
        // this.setState({parentTarget:this.props.parentTarget})
    }

    navClick(index){
        if (index == this.state.activeIndex) return
        let data = Mock.mock({
            'list|3': [{
                'list|4': [
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
                        }]
                    },
                ]
            }],
        }).list
        this.state.parentTarget.setState({recommendData:data})
        this.setState({activeIndex: index})
    }

    //渲染一级导航数据
    renderNavData() {
        let data = Mock.mock({
            'list|30': [{
                'name': '@cword(2, 5)',
            }],
        }).list

        this.setState({navData: data})
    }

    // 渲染一级导航
    renderNav() {
        let data = this.state.navData
        let arr = []
        data.forEach((msg, i) => {
            arr.push(
                <li key={i} onClick={() => {
                    this.navClick(i)
                }}>
                    <a href="javascript:;" className={this.state.activeIndex == i ? 'current' : ''}>{msg.name}</a>
                </li>
            )
        })
        return arr
    }

    render() {
        return (
            <header className="media_header" style={{marginTop: 50, paddingLeft: 0,borderBottom:'1px solid #e8e8e8'}}>
                <div className="media_header_info" id="wrapper" style={{margin: 0}}>
                    <ul id="scroller">
                        {this.renderNav()}
                    </ul>
                </div>
            </header>
        )
    }
}
