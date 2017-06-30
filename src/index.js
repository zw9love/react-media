import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import './assets/css/style_global.css';
import './assets/css/style_edit.css'
import Home from './pages/Home';
import Show from './pages/Show';
import RecommendSearch from './pages/RecommendSearch';
import SubscribeSearch from './pages/SubscribeSearch';
import MyOrder from './pages/MyOrder';
import MyLike from './pages/MyLike';
import MyComment from './pages/MyComment';
import Sugguestion from './pages/Sugguestion';
import LoginList from './pages/LoginList'
import PhoneLogin from './pages/PhoneLogin'
import OrderShow from './pages/OrderShow'
import SecondNav from './components/SecondNav'
import OrderSearchTxt from './components/OrderSearchTxt'
import RecommendSearchTxt from  './components/RecommendSearchTxt'

import {Provider} from 'react-redux'
import store from './store/index'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import $ from 'jquery'
// import {editShadowReducer} from './components/EditShadow'
//hashHistory  browserHistory  createMemoryHistory
// const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                {/*默认的路由组件是<RecommendSearchTxt />*/}
                <IndexRoute component={RecommendSearchTxt}/>
                <Route path="/industry/:id" component={SecondNav}/>
                {/*<Route path="/industry/:id/:index" component={SecondNav}/>*/}
                <Route path="/order/:id" component={OrderSearchTxt}/>
            </Route>
            <Route path="/show" component={Show}/>
            <Route path="/search" component={RecommendSearch}/>
            <Route path="/myOrder" component={MyOrder}/>
            <Route path="/subscribe" component={SubscribeSearch}/>
            <Route path="/myLike" component={MyLike}/>
            <Route path="/myComment" component={MyComment}/>
            <Route path="/sugguestion" component={Sugguestion}/>
            <Route path="/loginlist" component={LoginList}/>
            <Route path="/phonelogin" component={PhoneLogin}/>
            <Route path="/ordershow" component={OrderShow}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)

