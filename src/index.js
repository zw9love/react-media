import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import Home from './pages/Home';
import Show from './pages/Show';
import RecommendSearch from './pages/RecommendSearch';
import SubscribeSearch from './pages/SubscribeSearch';
import OrderList from './pages/OrderList';
import MyEdit from './pages/MyEdit';
import Sugguestion from './pages/Sugguestion';
import LoginList from './pages/LoginList'
import PhoneLogin from './pages/PhoneLogin'
import OrderShow from './pages/OrderShow'
import SecondNav from './components/SecondNav'
import OrderSearch from './components/OrderSearch'
import Search from  './components/Search'
import MyLike from  './components/MyLike'
import MyComment from  './components/MyComment'
// import Recommend from  './components/Recommend'
import './assets/css/style_index.css';
import $ from 'jquery'
//hashHistory  browserHistory  createMemoryHistory

var hello='666';

ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            {/*默认的路由组件是<Search />*/}
            <IndexRoute component={Search}/>
            <Route path="/industry/:id" component={SecondNav}/>
            {/*<Route path="/industry/:id/:index" component={SecondNav}/>*/}
            <Route path="/order/:id" component={OrderSearch}/>
        </Route>
        <Route path="/show" component={Show} />
        <Route path="/search" component={RecommendSearch} />
        <Route path="/orderlist" component={OrderList} />
        <Route path="/subscribe" component={SubscribeSearch} />
        <Route path="/myedit" component={MyEdit}>
            <Route path="mylike" component={MyLike} />
            <Route path="mycomment" component={MyComment} />
        </Route>
        <Route path="/sugguestion" component={Sugguestion} />
        <Route path="/loginlist" component={LoginList} />
        <Route path="/phonelogin" component={PhoneLogin} />
        <Route path="/ordershow" component={OrderShow} />
    </Router>,
  document.getElementById('root')
);


const size=parseInt($('html').css('font-size'));

function pageInit(){
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

pageInit();

$(window).resize(pageInit);

