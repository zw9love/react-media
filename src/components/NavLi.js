import React from 'react';
import $ from 'jquery'
import Cookie from '../assets/js/Cookie.js'

export default React.createClass({
    getInitialState: function () {
        return {
            isactive: this.props.data.isactive,
            classname: this.props.flag === 'first' ? 'current' : 'menucurrent'
        }
    },
    handleClick: function () {
        this.props.navClick();
        this.setState({isactive: true})
        this.horizontally($(this.refs.self));
        if(this.props.flag === 'second'){
            Cookie.myCookie.setCookie('index',this.props.index)
        }
    },
    horizontally(obj){
        obj.parent().removeAttr('class');
        let dis = obj.attr('myleft');
        obj.parent().css({
            'transform': 'translateX(' + dis + 'px)',
            '-webkit-transform': 'translateX(' + dis + 'px)'
        });
    },
    render: function () {
        return (
            <li ref="self" onClick={this.handleClick} className={this.state.isactive ? this.state.classname : ""}>
                <a href={this.props.data.href}>{this.props.data.name}</a>
            </li>
        )
    }
});
