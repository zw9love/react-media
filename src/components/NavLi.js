import React from 'react';
import $ from 'jquery'

export default React.createClass({
    getInitialState: function () {
        return {
            isactive: this.props.data.isactive,
            classname: this.props.flag === 'first' ? 'current' : 'menucurrent'
        }
    },
    handleClick: function (event) {
        // event.stopPropagation();
        this.props.navClick();
        this.setState({isactive: true})
        this.horizontally($(this.refs.self));
        // this.props.changeIndex(this.props.index);
        if(this.props.flag === 'second'){
            // console.log(this.props.index);
            // alert(1)
           // this.props.setIndex(100);
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
