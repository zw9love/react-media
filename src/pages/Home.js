import React, {Component} from 'react';
// import { Link } from 'react-router'
//import logo from './logo.svg';
//import $ from 'jquery'
import '../assets/css/style_home.css';
import FirstNav from '../components/FirstNav'
import RecommendEach from '../components/RecommendEach'
import $ from 'jquery'

const size=parseInt($('html').css('font-size'));

class App extends Component {
    constructor(props){
        super(props);
        // this.forSecond = this.forSecond.bind(this);
        this.state = {
            recommendList:[
                //推荐块4个一组  3大1小
                [
                    {eyes:100, msg:666, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:200, msg:888, ismovie:true,infoObj:{ismovie:true}},
                    {eyes:300, msg:222, ismovie:false,infoObj:{ismovie:false}},
                    {eyes:999, msg:333, ismovie:false,infoObj:{ismovie:false}}
                ]
            ],
            index:0
        }
    }
    render() {
        return (
            <div className="container">
                <FirstNav ref="firstnav"/>
                {/*给Route传参*/}
                {this.props.children && React.cloneElement(this.props.children, {
                    index: this.state.index,
                    changeIndex:function(val){
                        this.setState({index:val})
                    }
                })}

                <section className="media_info">
                {
                    this.state.recommendList.map(function(msg,i){
                        return <RecommendEach key={i} data={msg} />
                    })
                }
                </section>
            </div>
        );
    }
    componentDidMount(){
        var id=this.props.params.id;
        this.refs.firstnav.refs.mynav.myclick(id);
        // console.log(this.props.params)
    }
    componentWillMount(){
        this.pageInit();
        $(window).resize(this.pageInit);
    }

    pageInit(){
        let width=$(window).width();
        if(width<750){
            let bili=width/750;
            $('html').css({
                'font-size':bili*size
            });
        }else{
            $('html').css({
                'font-size':size
            });
        }
    }
}

export default App;
