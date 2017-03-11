import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import Home from './pages/Home';
import SecondNav from './components/SecondNav'
import OrderSearch from './components/OrderSearch'
import Search from  './components/Search'
import './assets/css/style_index.css';

ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            {/*默认的路由组件是<Search />*/}
            <IndexRoute component={Search}/>
            <Route path="/industry/:id" component={SecondNav}/>
            <Route path="/order/:id" component={OrderSearch}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
